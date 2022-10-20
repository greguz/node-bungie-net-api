import got from 'got'

import { PlatformErrorCodes } from './enum.js'
import { BungiePlatformError } from './error.js'
import { BungieToken } from './token.js'

import { App } from './components/App.js'
import { CommunityContent } from './components/CommunityContent.js'
import { Content } from './components/Content.js'
import { Destiny2 } from './components/Destiny2.js'
import { Fireteam } from './components/Fireteam.js'
import { Forum } from './components/Forum.js'
import { GroupV2 } from './components/GroupV2.js'
import { Social } from './components/Social.js'
import { Tokens } from './components/Tokens.js'
import { Trending } from './components/Trending.js'
import { User } from './components/User.js'

export class BungieApi {
  get authorized () {
    if (this.accessToken && this.accessToken.valid) {
      return true
    } else if (this.refreshToken && this.refreshToken.valid) {
      return true
    } else {
      return false
    }
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

    // TODO: rate-limit
    this._anonymous = got.extend({
      agent: options.agent || {},
      headers: {
        'x-api-key': this.apiKey
      },
      prefixUrl: this.url,
      responseType: 'json'
    })

    this.got = this._anonymous
    this.accessToken = undefined
    this.refreshToken = undefined

    if (options.refreshToken) {
      this.setRefreshToken(options.refreshToken, options.accessToken)
    } else if (options.accessToken) {
      this.setAccessToken(options.accessToken)
    }

    this.app = new App(this)
    this.communityContent = new CommunityContent(this)
    this.content = new Content(this)
    this.destiny2 = new Destiny2(this)
    this.fireteam = new Fireteam(this)
    this.forum = new Forum(this)
    this.groupV2 = new GroupV2(this)
    this.social = new Social(this)
    this.tokens = new Tokens(this)
    this.trending = new Trending(this)
    this.user = new User(this)
  }

  async authorize (code) {
    if (!this.clientId || !this.clientSecret) {
      throw new Error('Authorization needs both client idenfitied and secret')
    }

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

    const { accessToken, membershipId, refreshToken } = parseTokenResponse(body)
    if (refreshToken) {
      this.setRefreshToken(refreshToken, accessToken)
    } else {
      this.setAccessToken(accessToken)
    }

    return membershipId
  }

  getAuthorizationUrl (state, altUrl) {
    if (typeof state !== 'string') {
      throw new TypeError('State value must be a string')
    }
    if (!this.clientId) {
      throw new Error('Client identifier is required')
    }

    const url = new URL(altUrl || 'en/oauth/authorize', this.url)

    const search = new URLSearchParams()
    search.append('client_id', this.clientId)
    search.append('response_type', 'code')
    search.append('state', state)

    url.search = search

    return url.href
  }

  async requestPlatform (options) {
    if (!/^Platform\//i.test(options.url)) {
      throw new Error('Bungie Platform URLs should start with "Platform/"')
    }
    const response = await this.got({
      ...options,
      resolveBodyOnly: false,
      throwHttpErrors: false
    })
    if (Object(response.body).ErrorCode !== PlatformErrorCodes.Success) {
      throw new BungiePlatformError(Object(response.body), response.statusCode)
    }
    return response.body.Response
  }

  resetCredentials () {
    this.accessToken = undefined
    this.refreshToken = undefined
    this.got = this._anonymous
  }

  setAccessToken (accessToken) {
    this.refreshToken = undefined
    this.accessToken = BungieToken.from(accessToken)
    this.got = this._anonymous.extend({
      headers: {
        authorization: `Bearer ${this.accessToken}`
      }
    })
  }

  setRefreshToken (refreshToken, accessToken) {
    this.refreshToken = BungieToken.from(refreshToken)
    this.accessToken = accessToken !== undefined
      ? BungieToken.from(accessToken)
      : undefined
    this.got = autoRefresh(this)
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

function autoRefresh (api) {
  // Lock current values (read variables)
  const { _anonymous, clientId, clientSecret, refreshToken } = api

  // Current access token value (can be undefined or initialized)
  let accessToken = api.accessToken

  const refresh = oneCallIsEnough(
    async () => {
      // Load a new access token
      accessToken = await refreshAccessToken(_anonymous, clientId, clientSecret, refreshToken)
      // Detect refresh token changes post-inizialization
      if (api.refreshToken === refreshToken) {
        // Save inside the BungieApi instance the new access token
        api.accessToken = accessToken
      }
    }
  )

  return _anonymous.extend({
    hooks: {
      beforeRequest: [
        async options => {
          if (!refreshToken.valid) {
            throw new Error('The current refresh token is not valid')
          } else if (!accessToken || !accessToken.valid) {
            await refresh()
          } else {
            options.headers.authorization = `Bearer ${accessToken}`
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
    }
  })
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

async function refreshAccessToken (request, clientId, clientSecret, refreshToken) {
  const body = await request({
    method: 'POST',
    url: 'platform/app/oauth/token',
    username: clientId,
    password: clientSecret,
    form: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken.valueOf()
    },
    resolveBodyOnly: true
  })
  const { accessToken } = parseTokenResponse(body)
  return accessToken
}
