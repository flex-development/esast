/**
 * @file Type Tests - ParenthesizedExpression
 * @module esast/nodes/tests/unit-d/ParenthesizedExpression
 */

import type * as TestSubject from '#nodes/expression-parenthesized'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ParenthesizedExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParenthesizedExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ParenthesizedExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parenthesizedExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'parenthesizedExpression'>()
  })

  describe('ParenthesizedExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
