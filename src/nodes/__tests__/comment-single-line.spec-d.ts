/**
 * @file Type Tests - SingleLineComment
 * @module esast/nodes/tests/unit-d/SingleLineComment
 */

import type { CommentData, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment-single-line'

describe('unit-d:nodes/SingleLineComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SingleLineCommentData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
  })

  it('should match [data?: Optional<SingleLineCommentData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [single: true]', () => {
    expectTypeOf<Subject>().toHaveProperty('single').toEqualTypeOf<true>()
  })

  it('should match [type: "comment"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'comment'>()
  })

  describe('SingleLineCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<CommentData>()
    })
  })
})
