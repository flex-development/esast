/**
 * @file Type Tests - ArithmeticExpression
 * @module esast/nodes/tests/unit-d/ArithmeticExpression
 */

import type {
  ArithmeticOperator,
  BinaryExpression,
  BinaryExpressionData
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-arithmetic'

describe('unit-d:nodes/ArithmeticExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArithmeticExpressionData

  it('should extend BinaryExpression', () => {
    expectTypeOf<Subject>().toMatchTypeOf<BinaryExpression>()
  })

  it('should match [data?: Optional<ArithmeticExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: ArithmeticOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<ArithmeticOperator>()
  })

  it('should match [type: "arithmeticExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'arithmeticExpression'>()
  })

  describe('ArithmeticExpressionData', () => {
    it('should extend BinaryExpressionData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<BinaryExpressionData>()
    })
  })
})
