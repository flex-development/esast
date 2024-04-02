/**
 * @file Type Tests - BitwiseExpression
 * @module esast/nodes/tests/unit-d/BitwiseExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  BitwiseOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-bitwise'

describe('unit-d:nodes/BitwiseExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BitwiseExpressionData

  it('should extend BinaryExpression', () => {
    expectTypeOf<Subject>().toMatchTypeOf<BinaryExpression>()
  })

  it('should match [data?: Optional<BitwiseExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: BitwiseOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<BitwiseOperator>()
  })

  it('should match [type: "bitwiseExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'bitwiseExpression'>()
  })

  describe('BitwiseExpressionData', () => {
    it('should extend BinaryExpressionData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<BinaryExpressionData>()
    })
  })
})
