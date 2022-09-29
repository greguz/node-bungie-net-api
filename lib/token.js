export class BungieToken {
  static from (token, expiresInSeconds = 0) {
    if (token instanceof BungieToken) {
      return token
    } else if (
      typeof token === 'string' &&
      Number.isInteger(expiresInSeconds)
    ) {
      return new BungieToken(
        token,
        Math.round(Date.now() + (expiresInSeconds * 1000))
      )
    } else if (typeof Object(token).$token === 'object' && token.$token !== null) {
      return new BungieToken(token.$token.raw, token.$token.expires)
    } else {
      throw new TypeError('Unable to parse token value')
    }
  }

  get expired () {
    return this.expires > 0
      ? Date.now() >= this.expires
      : false
  }

  get valid () {
    return !this.expired
  }

  constructor (token, expires = 0) {
    if (typeof token !== 'string') {
      throw new TypeError('Expected a token string value')
    }
    this.raw = token

    if (!Number.isInteger(expires)) {
      throw new TypeError('Expected a integer date value')
    }
    this.expires = expires > 0 ? expires : 0
  }

  toJSON () {
    return {
      $token: {
        raw: this.raw,
        expires: this.expires
      }
    }
  }

  toString () {
    return this.valueOf()
  }

  valueOf () {
    return this.raw
  }
}
