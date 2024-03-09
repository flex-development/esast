/**
 * @file Type Tests - SequenceExpression
 * @module esast/nodes/tests/unit-d/SequenceExpression
 */

import type { Comment, Data, Expression, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-sequence'

describe('unit-d:nodes/SequenceExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SequenceExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Expression)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Expression)[]>()
  })

  it('should match [data?: Optional<SequenceExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "sequenceExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'sequenceExpression'>()
  })

  describe('SequenceExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
