/**
 * @file Type Tests - RelationalExpression
 * @module esast/nodes/tests/unit-d/RelationalExpression
 */

import type * as TestSubject from '#nodes/expression-relational'
import type {
  BinaryExpression,
  BinaryExpressionData,
  RelationalOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/RelationalExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.RelationalExpressionData

  it('should extend BinaryExpression', () => {
    expectTypeOf<Subject>().toExtend<BinaryExpression>()
  })

  it('should match [data?: RelationalExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: RelationalOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<RelationalOperator>()
  })

  it('should match [type: "relationalExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'relationalExpression'>()
  })

  describe('RelationalExpressionData', () => {
    it('should extend BinaryExpressionData', () => {
      expectTypeOf<SubjectData>().toExtend<BinaryExpressionData>()
    })
  })
})
