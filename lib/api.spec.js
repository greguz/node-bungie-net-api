import test from 'ava'

import { parseTokenResponse } from './api.js'
import { BungieToken } from './token.js'

test('parseTokenResponse', t => {
  t.throws(() => parseTokenResponse(null))

  const now = Date.now()
  const { accessToken, membershipId, refreshToken } = parseTokenResponse({
    token_type: 'Bearer',
    access_token: 'mytoken',
    expires_in: 60,
    membership_id: 'mymembership'
  })

  t.true(accessToken instanceof BungieToken)
  t.is(refreshToken, undefined)
  t.is(membershipId, 'mymembership')

  t.is(accessToken.raw, 'mytoken')
  t.true(accessToken.expires >= now + 60000)
})
