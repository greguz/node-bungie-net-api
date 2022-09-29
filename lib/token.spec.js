import test from 'ava'

import { BungieToken } from './token.js'

test('BungieToken', t => {
  const token = new BungieToken('mytokenvalue')
  t.is(token.raw, 'mytokenvalue')
  t.is(token.expires, 0)
  t.false(token.expired)
  t.true(token.valid)
})

test('BungieToken from values', t => {
  t.throws(() => BungieToken.from('validtokenvalue', 0.1))
  const now = Date.now()
  const token = BungieToken.from('fromvalues', 60)
  t.is(token.raw, 'fromvalues')
  t.true(token.expires >= now + 60000)
  t.false(token.expired)
  t.true(token.valid)
})

test('BungieToken from BungieToken', t => {
  const a = new BungieToken('fromtoken')
  const b = BungieToken.from(a)
  t.true(a === b)
})

test('BungieToken from JSON', t => {
  t.throws(() => BungieToken.from({ $nope: true }))
  const a = new BungieToken('fromjson', 42)
  const b = BungieToken.from(a.toJSON())
  t.is(a.raw, b.raw)
  t.is(a.expires, b.expires)
  t.is(a.expired, b.expired)
  t.is(a.valid, b.valid)
  t.false(a === b)
})
