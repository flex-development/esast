/**
 * @file Type Tests - subclauseExpression
 * @module esast/content/tests/unit-d/subclauseExpression
 */

import type { NodeObject } from '#tests/types'
import type { AsExpression, SatisfiesExpression } from '@flex-development/esast'
import type * as TestSubject from '../expression-subclause'

describe('unit-d:content/subclauseExpression', () => {
  describe('SubclauseExpression', () => {
    it('should equal SubclauseExpressionMap[keyof SubclauseExpressionMap]', () => {
      // Arrange
      type M = TestSubject.SubclauseExpressionMap
      type Expect = M[keyof M]

      // Expect
      expectTypeOf<TestSubject.SubclauseExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('SubclauseExpressionMap', () => {
    it('should match NodeObject<AsExpression>', () => {
      expectTypeOf<TestSubject.SubclauseExpressionMap>()
        .toMatchTypeOf<NodeObject<AsExpression>>()
    })

    it('should match NodeObject<SatisfiesExpression>', () => {
      expectTypeOf<TestSubject.SubclauseExpressionMap>()
        .toMatchTypeOf<NodeObject<SatisfiesExpression>>()
    })
  })
})
