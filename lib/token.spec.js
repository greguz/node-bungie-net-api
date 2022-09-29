import test from 'ava'

import { BungieToken } from './token.js'

test('BungieToken', t => {
  const token = new BungieToken('mytokenvalue')
  t.is(token.raw, 'mytokenvalue')
  t.is(token.expires, 0)
  t.false(token.expired)
  t.true(token.valid)
})
