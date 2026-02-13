/**
 * @file Type Tests - CallExpression
 * @module esast/nodes/tests/unit-d/CallExpression
 */

import type * as TestSubject from '#nodes/expression-call'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/CallExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CallExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: CallExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [optional: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('optional').toEqualTypeOf<boolean>()
  })

  it('should match [type: "callExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'callExpression'>()
  })

  describe('CallExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
