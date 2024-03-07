/**
 * @file Type Tests - primitive
 * @module esast/content/tests/unit-d/primitive
 */

import type {
  BigIntLiteral,
  BooleanLiteral,
  NullLiteral,
  NumberLiteral,
  StringLiteral,
  UndefinedLiteral
} from '@flex-development/esast'
import type * as TestSubject from '../primitive'

describe('unit-d:content/primitive', () => {
  describe('Primitive', () => {
    it('should equal PrimitiveMap[keyof PrimitiveMap]', () => {
      expectTypeOf<TestSubject.Primitive>()
        .toEqualTypeOf<TestSubject.PrimitiveMap[keyof TestSubject.PrimitiveMap]>
    })
  })

  describe('PrimitiveMap', () => {
    it('should match [bigint: BigIntLiteral]', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toHaveProperty('bigint')
        .toEqualTypeOf<BigIntLiteral>
    })

    it('should match [boolean: BooleanLiteral]', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toHaveProperty('boolean')
        .toEqualTypeOf<BooleanLiteral>
    })

    it('should match [null: NullLiteral]', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toHaveProperty('null')
        .toEqualTypeOf<NullLiteral>
    })

    it('should match [number: NumberLiteral]', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toHaveProperty('number')
        .toEqualTypeOf<NumberLiteral>
    })

    it('should match [string: StringLiteral]', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toHaveProperty('string')
        .toEqualTypeOf<StringLiteral>
    })

    it('should match [undefined: UndefinedLiteral]', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toHaveProperty('undefined')
        .toEqualTypeOf<UndefinedLiteral>
    })
  })
})
