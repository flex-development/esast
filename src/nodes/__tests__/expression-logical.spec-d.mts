/**
 * @file Type Tests - LogicalExpression
 * @module esast/nodes/tests/unit-d/LogicalExpression
 */

import type * as TestSubject from '#nodes/expression-logical'
import type {
  BinaryExpression,
  BinaryExpressionData,
  LogicalOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/LogicalExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LogicalExpressionData

  it('should extend BinaryExpression', () => {
    expectTypeOf<Subject>().toExtend<BinaryExpression>()
  })

  it('should match [data?: LogicalExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: LogicalOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<LogicalOperator>()
  })

  it('should match [type: "logicalExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'logicalExpression'>()
  })

  describe('LogicalExpressionData', () => {
    it('should extend BinaryExpressionData', () => {
      expectTypeOf<SubjectData>().toExtend<BinaryExpressionData>()
    })
  })
})
