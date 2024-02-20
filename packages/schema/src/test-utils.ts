import * as Arbitrary from '@effect/schema/Arbitrary'
import * as S from '@effect/schema/Schema'
import * as fc from 'fast-check'

export const one = <T>(schema: S.Schema<T, T, unknown>) =>
  fc.sample(Arbitrary.make(schema)(fc), 1)[0]

export const many = <T>(schema: S.Schema<T, T, unknown>, count: number = 3) =>
  fc.sample(Arbitrary.make(schema)(fc), count)
