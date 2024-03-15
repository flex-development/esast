/**
 * @file Type Tests - BlockComment
 * @module esast/nodes/tests/unit-d/BlockComment
 */

import type { Comment, CommentData } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment-block'

describe('unit-d:nodes/BlockComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Comment>()
  })

  it('should match [data?: Optional<BlockCommentData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "block"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'block'>()
  })

  describe('BlockCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<CommentData>()
    })
  })
})
