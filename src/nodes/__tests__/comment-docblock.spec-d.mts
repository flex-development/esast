/**
 * @file Type Tests - DocblockComment
 * @module esast/nodes/tests/unit-d/DocblockComment
 */

import type * as TestSubject from '#nodes/comment-docblock'
import * as docast from '@flex-development/docast'
import type { Comment, CommentData } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/DocblockComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DocblockCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toExtend<Comment>()
  })

  it('should extend Omit<docast.Comment, "position">', () => {
    expectTypeOf<Subject>().toExtend<Omit<docast.Comment, 'position'>>()
  })

  it('should match [data?: DocblockCommentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "docblock"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'docblock'>()
  })

  describe('DocblockCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toExtend<CommentData>()
    })

    it('should extend docast.CommentData', () => {
      expectTypeOf<SubjectData>().toExtend<docast.CommentData>()
    })
  })
})
