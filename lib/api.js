import got from 'got'

import { ComponentType, ErrorCode, MembershipType } from './enum.js'
import { BungiePlatformError } from './error.js'
import { BungieToken } from './token.js'
import { validateEnum, validateEnums } from './util.js'

export class BungieApi {
  get authorized () {
    return this.accessToken?.valid === true
  }

  get accessToken () {
    return this._accessToken
  }

  set accessToken (token) {
    if (token !== undefined) {
      token = BungieToken.from(token)
    }
    this._accessToken = token
  }

  get refreshToken () {
    return this._refreshToken
  }

  set refreshToken (token) {
    if (token !== undefined) {
      token = BungieToken.from(token)
    }
    // Reset the access token because the user could be changed
    this._accessToken = undefined
    this._refreshToken = token
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

    const refresh = oneCallIsEnough(() => this.refreshAccessToken())

    // TODO: rate-limit
    this.got = got.extend({
      agent: options.agent || {},
      headers: {
        'x-api-key': this.apiKey
      },
      hooks: {
        beforeRequest: [
          async options => {
            if (this.refreshToken?.valid && !this.accessToken?.valid) {
              await refresh()
            }
            if (this.accessToken?.valid) {
              options.headers.authorization = `Bearer ${this.accessToken}`
            }
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
      },
      prefixUrl: this.url,
      responseType: 'json'
    })

    this.refreshToken = options.refreshToken
    this.accessToken = options.accessToken
  }

  async authorize (code) {
    if (!this.clientId || !this.clientSecret) {
      throw new Error()
    }

    // Reset both refresh token and access token
    this.refreshToken = undefined

    const body = await this.got({
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

    const { accessToken, membershipId, refreshToken } = parseTokenResponse(body)
    this.refreshToken = refreshToken
    this.accessToken = accessToken

    return membershipId
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
    if (!this.clientId || !this.clientSecret) {
      throw new Error()
    }
    if (!this.refreshToken?.valid) {
      // TODO: emulate bungie error?
      throw new Error('Needs a valid refresh token')
    }

    // Reset current access token
    this.accessToken = undefined

    // TODO: map errors
    const body = await this.got({
      method: 'POST',
      url: 'platform/app/oauth/token',
      username: this.clientId,
      password: this.clientSecret,
      form: {
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken.valueOf()
      },
      resolveBodyOnly: true
    })
    if (Object(body).token_type !== 'Bearer') {
      throw new Error('Unsupported auth policy')
    }

    const { accessToken } = parseTokenResponse(body)
    // TODO: update refresh token?
    this.accessToken = accessToken
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

export function parseTokenResponse (body) {
  if (Object(body).token_type !== 'Bearer') {
    throw new Error('Unsupported auth policy')
  }

  const refreshToken = body.refresh_token
    ? new BungieToken(body.refresh_token, parseExpirationDate(body.refresh_expires_in))
    : undefined

  const accessToken = new BungieToken(
    body.access_token,
    parseExpirationDate(body.expires_in)
  )

  return {
    accessToken,
    membershipId: body.membership_id,
    refreshToken
  }
}

function parseExpirationDate (seconds) {
  if (!Number.isInteger(seconds) || seconds <= 0) {
    throw new TypeError('Expected positive integer')
  }
  return Math.round(Date.now() + (seconds * 1000))
}
