/**
 * @file Type Tests - BlockComment
 * @module esast/nodes/tests/unit-d/BlockComment
 */

import type * as TestSubject from '#nodes/comment-block'
import type { Comment, CommentData } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/BlockComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toExtend<Comment>()
  })

  it('should match [data?: BlockCommentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "block"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'block'>()
  })

  describe('BlockCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toExtend<CommentData>()
    })

    it('should match [leading?: boolean | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('leading')
        .toEqualTypeOf<Nilable<boolean>>()
    })

    it('should match [trailing?: boolean | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('trailing')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
