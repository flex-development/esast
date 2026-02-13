/**
 * @file Type Tests - Comment
 * @module esast/nodes/tests/unit-d/Comment
 */

import type * as TestSubject from '#nodes/comment'
import type { CommentKind, Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Comment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: CommentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: CommentKind]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<CommentKind>()
  })

  it('should match [type: "comment"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'comment'>()
  })

  describe('CommentData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
