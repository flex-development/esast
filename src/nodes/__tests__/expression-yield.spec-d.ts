/**
 * @file Type Tests - YieldExpression
 * @module esast/nodes/tests/unit-d/YieldExpression
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-yield'

describe('unit-d:nodes/YieldExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.YieldExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: EmptyArray | [Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<EmptyArray | [Expression]>()
  })

  it('should match [data?: Optional<YieldExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [delegate: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('delegate').toEqualTypeOf<boolean>()
  })

  it('should match [type: "yieldExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'yieldExpression'>()
  })

  describe('YieldExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
