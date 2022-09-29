import got from 'got'

import { ComponentType, ErrorCode, MembershipType } from './enum.js'
import { BungiePlatformError } from './error.js'
import { BungieToken } from './token.js'
import { validateEnum, validateEnums } from './util.js'

export class BungieApi {
  get got () {
    return this._authorized || this._anonymous
  }

  constructor (options) {
    if (typeof options !== 'object' || options === null) {
      throw new TypeError('Expected options object')
    }
    if (!options.apiKey) {
      throw new Error('You need to provide a valid API key')
    }
    this.apiKey = options.apiKey

    this.url = options.url || 'https://www.bungie.net/'
    if (options.clientId) {
      this.clientId = options.clientId
    }
    if (options.clientSecret) {
      this.clientSecret = options.clientSecret
    }

    this._anonymous = got.extend({
      agent: options.agent || {},
      headers: {
        'x-api-key': this.apiKey
      },
      prefixUrl: this.url,
      responseType: 'json'
      // TODO: rate-limit
    })

    this.setCredentials(options)
  }

  async authorize (code) {
    if (!this.clientId || !this.clientSecret) {
      throw new Error()
    }
    // TODO: handle expiration
    // {
    //   "access_token":"2YotnFZFEjr1zCsicMWpAA",
    //   "token_type":"Bearer",
    //   "expires_in":3600,
    //   "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
    //   "refresh_expires_in": 7776000
    //   "membership_id":"4352344"
    // }
    const body = await this._anonymous({
      method: 'POST',
      url: 'platform/app/oauth/token',
      username: this.clientId,
      password: this.clientSecret,
      form: {
        grant_type: 'authorization_code',
        code
      },
      resolveBodyOnly: true
    })
    if (Object(body).token_type !== 'Bearer') {
      throw new Error('Unsupported auth policy')
    }

    const accessToken = BungieToken.from(body.access_token, body.expires_in)
    const refreshToken = body.refresh_token
      ? BungieToken.from(body.refresh_token, body.refresh_expires_in)
      : null

    this.setCredentials({ accessToken, refreshToken })

    return body.membership_id
  }

  getAuthorizationUrl (state, altUrl) {
    if (typeof state !== 'string') {
      throw new TypeError()
    }
    if (!this.clientId) {
      throw new Error()
    }

    const url = new URL(altUrl || 'en/oauth/authorize', this.url)

    const search = new URLSearchParams()
    search.append('client_id', this.clientId)
    search.append('response_type', 'code')
    search.append('state', state)

    url.search = search

    return url.href
  }

  getManifest () {
    return this.requestPlatform({
      method: 'GET',
      url: 'Platform/Destiny2/Manifest'
    })
  }

  getMembershipsForCurrentUser () {
    return this.requestPlatform({
      method: 'GET',
      url: 'Platform/User/GetMembershipsForCurrentUser'
    })
  }

  getProfile (membershipType, membershipId, components) {
    validateEnum(membershipType, MembershipType)
    return this.requestPlatform({
      url: `Platform/Destiny2/${membershipType}/Profile/${membershipId}`,
      searchParams: {
        components: validateEnums(components, ComponentType).join(',')
      }
    })
  }

  getVendor (membershipType, membershipId, characterId, vendorHash, components) {
    validateEnum(membershipType, MembershipType)
    return this.requestPlatform({
      method: 'GET',
      url: `Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${characterId}/Vendors/${vendorHash}`,
      searchParams: {
        components: validateEnums(components, ComponentType).join(',')
      }
    })
  }

  getVendors (membershipType, membershipId, characterId, components) {
    validateEnum(membershipType, MembershipType)
    return this.requestPlatform({
      method: 'GET',
      url: `Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${characterId}/Vendors`,
      searchParams: {
        components: validateEnums(components, ComponentType).join(',')
      }
    })
  }

  async refreshAccessToken () {
    if (!this.clientId) {
      throw new Error()
    }
    if (!this.clientSecret) {
      throw new Error()
    }
    if (!this.refreshToken?.valid) {
      // TODO: error
    }

    // TODO: body?
    // TODO: map errors
    const body = await this._anonymous({
      method: 'POST',
      url: 'app/oauth/token',
      username: this.clientId,
      password: this.clientSecret,
      form: {
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken.valueOf()
      },
      resolveBodyOnly: true
    })

    this.accessToken = BungieToken.from(body.access_token, body.expires_in)
  }

  async requestPlatform (options) {
    if (!/^Platform\//i.test(options.url)) {
      throw new Error('Bungie Platform URLs should start with "Platform/"')
    }
    const response = await this.got({
      body: options.body,
      method: options.method,
      resolveBodyOnly: false,
      searchParams: options.searchParams,
      throwHttpErrors: false,
      url: options.url
    })
    if (Object(response.body).ErrorCode !== ErrorCode.Success) {
      throw new BungiePlatformError(Object(response.body), response.statusCode)
    }
    return response.body.Response
  }

  setAccessToken (accessToken) {
    accessToken = BungieToken.from(accessToken)
    if (!accessToken.valid) {
      throw new Error()
    }

    this.accessToken = accessToken
    this.refreshToken = null

    this._authorized = this._anonymous.extend({
      headers: {
        authorization: `Bearer ${accessToken.valueOf()}`
      }
    })
  }

  setCredentials (options = {}) {
    this._authorized = null
    if (options.refreshToken) {
      this.setRefreshToken(options.refreshToken, options.accessToken)
    } else if (options.accessToken) {
      this.setAccessToken(options.accessToken)
    }
  }

  setRefreshToken (refreshToken, accessToken = null) {
    if (!this.clientId || !this.clientSecret) {
      throw new Error()
    }

    refreshToken = BungieToken.from(refreshToken)
    if (!refreshToken.valid) {
      throw new Error()
    }
    if (accessToken !== null) {
      accessToken = BungieToken.from(accessToken)
    }

    this.accessToken = accessToken
    this.refreshToken = refreshToken

    const refresh = oneCallIsEnough(() => this.refreshAccessToken())

    this._authorized = this._anonymous.extend({
      hooks: {
        beforeRequest: [
          async options => {
            if (!this.accessToken?.valid) {
              await refresh()
            }
            options.headers.authorization = `Bearer ${this.accessToken.valueOf()}`
          }
        ],
        afterResponse: [
          async (response, retry) => {
            // TODO: handle expiration and refresh
            if (response.statusCode !== 200 && response.body !== undefined) {
              console.log(response.body)
            }
            // if (Object(response.body).error === 'ACCESS_TOKEN_EXPIRED') {
            //   accessToken = await refresh()
            //   return retry({
            //     headers: {
            //       authorization: `Bearer ${accessToken}`,
            //     },
            //   })
            // }
            return response
          }
        ]
      }
    })
  }
}

function oneCallIsEnough (fn) {
  let promise
  return function () {
    if (!promise) {
      promise = fn().then(
        res => {
          promise = undefined
          return Promise.resolve(res)
        },
        err => {
          promise = undefined
          return Promise.reject(err)
        }
      )
    }
    return promise
  }
}
