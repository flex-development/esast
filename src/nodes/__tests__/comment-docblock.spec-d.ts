/**
 * @file Type Tests - DocblockComment
 * @module esast/nodes/tests/unit-d/DocblockComment
 */

import * as docast from '@flex-development/docast'
import type { Comment, CommentData } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment-docblock'

describe('unit-d:nodes/DocblockComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DocblockCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Comment>()
  })

  it('should extend Omit<docast.Comment, "position">', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Omit<docast.Comment, 'position'>>()
  })

  it('should match [data?: Optional<DocblockCommentData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: "docblock"]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<'docblock'>()
  })

  describe('DocblockCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<CommentData>()
    })

    it('should extend docast.CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<docast.CommentData>()
    })
  })
})
