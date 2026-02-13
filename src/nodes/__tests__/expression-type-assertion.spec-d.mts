/**
 * @file Type Tests - TypeAssertionExpression
 * @module esast/nodes/tests/unit-d/TypeAssertionExpression
 */

import type * as TestSubject from '#nodes/expression-type-assertion'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TypeAssertionExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAssertionExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TypeAssertionExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeAssertionExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeAssertionExpression'>()
  })

  describe('TypeAssertionExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
