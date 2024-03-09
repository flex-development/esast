/**
 * @file Type Tests - AwaitExpression
 * @module esast/nodes/tests/unit-d/AwaitExpression
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-await'

describe('unit-d:nodes/AwaitExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AwaitExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression]>()
  })

  it('should match [data?: Optional<AwaitExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "awaitExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'awaitExpression'>()
  })

  describe('AwaitExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
