/**
 * @file Type Tests - HashbangComment
 * @module esast/nodes/tests/unit-d/HashbangComment
 */

import type * as TestSubject from '#nodes/comment-hashbang'
import type { Comment, CommentData } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/HashbangComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.HashbangCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toExtend<Comment>()
  })

  it('should match [data?: HashbangCommentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "hashbang"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'hashbang'>()
  })

  describe('HashbangCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toExtend<CommentData>()
    })
  })
})
