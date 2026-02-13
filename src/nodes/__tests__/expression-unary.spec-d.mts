/**
 * @file Type Tests - UnaryExpression
 * @module esast/nodes/tests/unit-d/UnaryExpression
 */

import type * as TestSubject from '#nodes/expression-unary'
import type { Data, Parent, UnaryOperator } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/UnaryExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnaryExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: UnaryExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: UnaryOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<UnaryOperator>()
  })

  it('should match [type: "unaryExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'unaryExpression'>()
  })

  describe('UnaryExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
