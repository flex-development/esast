/**
 * @file Type Tests - YieldExpression
 * @module esast/nodes/tests/unit-d/YieldExpression
 */

import type * as TestSubject from '#nodes/expression-yield'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/YieldExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.YieldExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: YieldExpressionData | undefined]', () => {
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
