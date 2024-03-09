/**
 * @file Type Tests - primitive
 * @module esast/content/tests/unit-d/primitive
 */

import type { NodeObject } from '#tests/types'
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
    it('should match NodeObject<BigIntLiteral>', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toMatchTypeOf<NodeObject<BigIntLiteral>>()
    })

    it('should match NodeObject<BooleanLiteral>', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toMatchTypeOf<NodeObject<BooleanLiteral>>()
    })

    it('should match NodeObject<NullLiteral>', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toMatchTypeOf<NodeObject<NullLiteral>>()
    })

    it('should match NodeObject<NumberLiteral>', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toMatchTypeOf<NodeObject<NumberLiteral>>()
    })

    it('should match NodeObject<StringLiteral>', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toMatchTypeOf<NodeObject<StringLiteral>>()
    })

    it('should match NodeObject<UndefinedLiteral>', () => {
      expectTypeOf<TestSubject.PrimitiveMap>()
        .toMatchTypeOf<NodeObject<UndefinedLiteral>>()
    })
  })
})
