/**
 * @file Type Tests - LineComment
 * @module esast/nodes/tests/unit-d/LineComment
 */

import * as docast from '@flex-development/docast'
import type { Comment, CommentData } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment-line'

describe('unit-d:nodes/LineComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LineCommentData

  it('should extend Comment', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Comment>()
  })

  it('should match [children: Exclude<docast.PhrasingContent, docast.InlineTag>[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Exclude<docast.PhrasingContent, docast.InlineTag>[]>()
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
  })
})
