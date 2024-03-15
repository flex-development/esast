/**
 * @file Type Tests - LineComment
 * @module esast/nodes/tests/unit-d/LineComment
 */

import type { Comment, CommentData } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment-line'

describe('unit-d:nodes/LineComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LineCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Comment>()
  })

  it('should match [data?: Optional<LineCommentData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "line"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'line'>()
  })

  describe('LineCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<CommentData>()
    })

    it('should match [trailing?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('trailing')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
