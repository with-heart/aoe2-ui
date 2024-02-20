import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { HotKey } from './misc'

test('HotKey', () => {
  expect(
    S.is(HotKey)({
      Group: 'group',
      Key: 'key',
    }),
  ).toBeTrue()
})
