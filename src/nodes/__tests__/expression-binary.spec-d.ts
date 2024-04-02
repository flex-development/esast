/**
 * @file Type Tests - BinaryExpression
 * @module esast/nodes/tests/unit-d/BinaryExpression
 */

import type { BinaryOperator, Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-binary'

describe('unit-d:nodes/BinaryExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BinaryExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<BinaryExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: BinaryOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<BinaryOperator>()
  })

  describe('BinaryExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
