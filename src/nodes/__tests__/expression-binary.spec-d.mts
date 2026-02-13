/**
 * @file Type Tests - BinaryExpression
 * @module esast/nodes/tests/unit-d/BinaryExpression
 */

import type * as TestSubject from '#nodes/expression-binary'
import type { BinaryOperator, Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/BinaryExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BinaryExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: BinaryExpressionData | undefined]', () => {
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
