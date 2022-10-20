import test from 'ava'

import { BungieMembershipType, validateEnum } from './enum.js'

test('validateEnum', t => {
  t.truthy(validateEnum(-1, BungieMembershipType))
  t.throws(() => validateEnum(42, BungieMembershipType))
  t.truthy(validateEnum([-1], BungieMembershipType))
  t.throws(() => validateEnum([42], BungieMembershipType))
})
