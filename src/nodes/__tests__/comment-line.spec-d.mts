/**
 * @file Type Tests - LineComment
 * @module esast/nodes/tests/unit-d/LineComment
 */

import type * as TestSubject from '#nodes/comment-line'
import type { Comment, CommentData } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/LineComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LineCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toExtend<Comment>()
  })

  it('should match [data?: LineCommentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "line"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'line'>()
  })

  describe('LineCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toExtend<CommentData>()
    })

    it('should match [trailing?: boolean | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('trailing')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
