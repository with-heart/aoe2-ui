import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { IconValue } from './icon'

test('IconValue', () => {
  const valid: IconValue = { TechId: 1 }

  expect(S.is(IconValue)(valid)).toBeTrue()
  expect(S.is(IconValue)({ ...valid, CivIds: [] })).toBeTrue()
  expect(S.is(IconValue)({ ...valid, CivIds: [2] })).toBeTrue()
  expect(S.is(IconValue)({ ...valid, ExcludeCivs: true })).toBeTrue()
  expect(S.is(IconValue)({ ...valid, UnitId: 1 })).toBeTrue()
  expect(S.is(IconValue)({ ...valid, TeamBonus: true })).toBeTrue()
})
