/**
 * @file Type Tests - expression
 * @module esast/content/tests/unit-d/expression
 */

import type { Identifier, LiteralMap } from '@flex-development/esast'
import type * as TestSubject from '../expression'

describe('unit-d:content/expression', () => {
  describe('Expression', () => {
    it('should equal ExpressionMap[keyof ExpressionMap]', () => {
      // Arrange
      type Expect = TestSubject.ExpressionMap[keyof TestSubject.ExpressionMap]

      // Expect
      expectTypeOf<TestSubject.Expression>().toEqualTypeOf<Expect>
    })
  })

  describe('ExpressionMap', () => {
    it('should extend LiteralMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>().toMatchTypeOf<LiteralMap>()
    })

    it('should match [identifier: Identifier]', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toHaveProperty('identifier')
        .toEqualTypeOf<Identifier>
    })
  })
})
