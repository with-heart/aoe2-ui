import { expect, test } from 'bun:test'
import { Color, ColorNumber } from './color'
import * as S from '@effect/schema/Schema'

test('ColorNumber', () => {
  const is = S.is(ColorNumber)

  expect(is(0)).toBeTrue()
  expect(is(255)).toBeTrue()
  expect(is(-1)).toBeFalse()
  expect(is(256)).toBeFalse()
})

test('Color', () => {
  const color: Color = {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  }
  const is = S.is(Color)

  expect(is(color)).toBeTrue()
  expect(is({ ...color, r: -1 })).toBeFalse()
  expect(is({ ...color, r: 256 })).toBeFalse()
  expect(is({ ...color, g: -1 })).toBeFalse()
  expect(is({ ...color, g: 256 })).toBeFalse()
  expect(is({ ...color, b: -1 })).toBeFalse()
  expect(is({ ...color, b: 256 })).toBeFalse()
  expect(is({ ...color, a: -1 })).toBeFalse()
  expect(is({ ...color, a: 256 })).toBeFalse()
})
