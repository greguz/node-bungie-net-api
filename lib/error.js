export class BungieError extends Error {
  constructor (message, code = 'BUNGIE_ERROR') {
    super(message || 'Unknwon error')
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
    this.name = this.constructor.name
    this.code = code
  }

  get [Symbol.toStringTag] () {
    return 'Error'
  }

  toString () {
    return `${this.name} [${this.code}]: ${this.message}`
  }
}

// {
//   ErrorCode: 1,
//   ThrottleSeconds: 0,
//   ErrorStatus: 'Success',
//   Message: 'Ok',
//   MessageData: {}
// }
export class BungiePlatformError extends BungieError {
  constructor (body, statusCode) {
    super(body.Message, 'BUNGIE_PLATFORM_ERROR')

    this.bungieCode = body.ErrorCode ?? -1
    this.bungieStatus = body.ErrorStatus ?? 'Unknown'
    this.data = Object(body.MessageData)
    if (body.ThrottleSeconds !== undefined) {
      this.throttleSeconds = body.ThrottleSeconds
    }

    this.statusCode = statusCode
  }
}
