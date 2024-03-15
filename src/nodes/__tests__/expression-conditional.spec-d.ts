/**
 * @file Type Tests - ConditionalExpression
 * @module esast/nodes/tests/unit-d/ConditionalExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-conditional'

describe('unit-d:nodes/ConditionalExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConditionalExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ConditionalExpressionData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
