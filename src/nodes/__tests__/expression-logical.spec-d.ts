/**
 * @file Type Tests - LogicalExpression
 * @module esast/nodes/tests/unit-d/LogicalExpression
 */

import type {
  Data,
  Expression,
  LogicalOperator,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-logical'

describe('unit-d:nodes/LogicalExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LogicalExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression, Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression, Expression]>()
  })

  it('should match [data?: Optional<LogicalExpressionData>]', () => {
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
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
