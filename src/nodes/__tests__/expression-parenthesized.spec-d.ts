/**
 * @file Type Tests - ParenthesizedExpression
 * @module esast/nodes/tests/unit-d/ParenthesizedExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-parenthesized'

describe('unit-d:nodes/ParenthesizedExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParenthesizedExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ParenthesizedExpressionData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
