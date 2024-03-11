import * as Arbitrary from '@effect/schema/Arbitrary'
import * as S from '@effect/schema/Schema'
import * as fc from 'fast-check'

export const one = <A, I, R>(schema: S.Schema<A, I, R>): A =>
  fc.sample(Arbitrary.make(schema)(fc), 1)[0]

export const many = <A, I, R>(
  schema: S.Schema<A, I, R>,
  count: number = 3,
): A[] => fc.sample(Arbitrary.make(schema)(fc), count)
