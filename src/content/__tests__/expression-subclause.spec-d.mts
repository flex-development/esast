/**
 * @file Type Tests - subclauseExpression
 * @module esast/content/tests/unit-d/subclauseExpression
 */

import type * as TestSubject from '#content/expression-subclause'
import type NodeObject from '#tests/types/node-object'
import type { AsExpression, SatisfiesExpression } from '@flex-development/esast'

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
        .toExtend<NodeObject<AsExpression>>()
    })

    it('should match NodeObject<SatisfiesExpression>', () => {
      expectTypeOf<TestSubject.SubclauseExpressionMap>()
        .toExtend<NodeObject<SatisfiesExpression>>()
    })
  })
})
