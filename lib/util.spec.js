import test from 'ava'

import { MembershipType } from './enum.js'
import { validateEnum, validateEnums } from './util.js'

test('validateEnum', t => {
  t.truthy(validateEnum(-1, MembershipType))
  t.throws(() => validateEnum(42, MembershipType))
})

test('validateEnums', t => {
  t.truthy(validateEnums([-1], MembershipType))
  t.throws(() => validateEnums(-1, MembershipType))
  t.throws(() => validateEnums([], MembershipType))
  t.throws(() => validateEnums([42], MembershipType))
})
