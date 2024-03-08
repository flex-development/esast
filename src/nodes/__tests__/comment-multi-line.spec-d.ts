/**
 * @file Type Tests - MultiLineComment
 * @module esast/nodes/tests/unit-d/MultiLineComment
 */

import type { CommentData, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment-multi-line'

describe('unit-d:nodes/MultiLineComment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MultiLineCommentData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
  })

  it('should match [data?: Optional<MultiLineCommentData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [multi: true]', () => {
    expectTypeOf<Subject>().toHaveProperty('multi').toEqualTypeOf<true>()
  })

  it('should match [type: "comment"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'comment'>()
  })

  describe('MultiLineCommentData', () => {
    it('should extend CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<CommentData>()
    })
  })
})
