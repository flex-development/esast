/**
 * @file Type Tests - EqualityExpression
 * @module esast/nodes/tests/unit-d/EqualityExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  EqualityOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-equality'

describe('unit-d:nodes/EqualityExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EqualityExpressionData

  it('should extend BinaryExpression', () => {
    expectTypeOf<Subject>().toMatchTypeOf<BinaryExpression>()
  })

  it('should match [data?: EqualityExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: EqualityOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<EqualityOperator>()
  })

  it('should match [type: "equalityExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'equalityExpression'>()
  })

  describe('EqualityExpressionData', () => {
    it('should extend BinaryExpressionData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<BinaryExpressionData>()
    })
  })
})
