import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { one } from 'test-utils'
import { Color } from './color'
import {
  Font,
  FontStyle,
  Material,
  StateMaterials,
  StatusStates,
  UserStates,
} from './state-materials'

test('FontStyle', () => {
  expect(S.is(FontStyle)('Normal')).toBeTrue()
  expect(S.is(FontStyle)('Outlined')).toBeTrue()
  expect(S.is(FontStyle)('invalid')).toBeFalse()
})

test('Font', () => {
  const valid = {
    FontIndex: 1,
    PointSize: 36,
    Style: one(FontStyle),
  }

  expect(S.is(Font)(valid)).toBeTrue()
  expect(
    S.is(Font)({ ...valid, AllowGameModeTextColorOverride: true }),
  ).toBeTrue()
  expect(S.is(Font)({ ...valid, TextColor: one(Color) })).toBeTrue()
  expect(S.is(Font)({ ...valid, TextOutlineColor: one(Color) })).toBeTrue()
  expect(S.is(Font)({ ...valid, TextOutlineWidth: 1 })).toBeTrue()
  expect(S.is(Font)({})).toBeFalse()
})

test('Material', () => {
  const is = S.is(Material)

  expect(is({ Font: one(Font) })).toBeTrue()
  expect(is({ Material: 'SomeMaterial' })).toBeTrue()
  expect(is({ Color: one(Color) })).toBeTrue()
  expect(is({ TextColor: one(Color) })).toBeTrue()
})

test('UserStates', () => {
  const valid = {
    UserStates: 1,
  }
  const is = S.is(UserStates, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, UserState0: one(Material) })).toBeTrue()
  expect(is({ ...valid, UserStateNormal: one(Material) })).toBeFalse()
  expect(is({ ...valid, StateNormal: one(Material) })).toBeFalse()
})

test('StatusStates', () => {
  const valid = {
    StateNormal: one(Material),
  }
  const is = S.is(StatusStates, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ UserStates: 0 })).toBeFalse()
  expect(is({ UserState0: one(Material) })).toBeFalse()
  expect(is({ xyz: 0 })).toBeFalse()
})

test('StateMaterials', () => {
  const is = S.is(StateMaterials, { onExcessProperty: 'error' })

  expect(is(one(UserStates))).toBeTrue()
  expect(is(one(StatusStates))).toBeTrue()
})
