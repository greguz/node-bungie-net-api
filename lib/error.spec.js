import test from 'ava'

import { ErrorCode } from './enum.js'
import { BungiePlatformError } from './error.js'

test('BungiePlatformError', t => {
  const err = new BungiePlatformError({
    ErrorCode: ErrorCode.BadRequest,
    ErrorStatus: 'BadRequest',
    Message: 'Missing field',
    MessageData: { missingField: 'test' },
    ThrottleSeconds: 0
  }, 500)
  t.like(err, {
    bungieCode: ErrorCode.BadRequest,
    bungieStatus: 'BadRequest',
    data: {
      missingField: 'test'
    },
    message: 'Missing field',
    statusCode: 500,
    throttleSeconds: 0
  })
})
