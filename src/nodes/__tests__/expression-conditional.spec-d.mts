/**
 * @file Type Tests - ConditionalExpression
 * @module esast/nodes/tests/unit-d/ConditionalExpression
 */

import type * as TestSubject from '#nodes/expression-conditional'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ConditionalExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConditionalExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ConditionalExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "conditionalExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'conditionalExpression'>()
  })

  describe('ConditionalExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
