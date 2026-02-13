/**
 * @file Type Tests - ComputedExpression
 * @module esast/nodes/tests/unit-d/ComputedExpression
 */

import type * as TestSubject from '#nodes/expression-computed'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ComputedExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ComputedExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ComputedExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "computedExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'computedExpression'>()
  })

  describe('ComputedExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
