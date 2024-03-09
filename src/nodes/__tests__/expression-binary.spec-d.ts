/**
 * @file Type Tests - BinaryExpression
 * @module esast/nodes/tests/unit-d/BinaryExpression
 */

import type {
  BinaryOperator,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-binary'

describe('unit-d:nodes/BinaryExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BinaryExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression, Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression, Expression]>()
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

  it('should match [type: "binaryExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'binaryExpression'>()
  })

  describe('BinaryExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
