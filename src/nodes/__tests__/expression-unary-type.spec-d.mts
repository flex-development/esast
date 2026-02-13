/**
 * @file Type Tests - UnaryTypeExpression
 * @module esast/nodes/tests/unit-d/UnaryTypeExpression
 */

import type * as TestSubject from '#nodes/expression-unary-type'
import type { Data, Parent, UnaryTypeOperator } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/UnaryTypeExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnaryTypeExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: UnaryTypeExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: UnaryTypeOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<UnaryTypeOperator>()
  })

  it('should match [type: "unaryTypeExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'unaryTypeExpression'>()
  })

  describe('UnaryTypeExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
