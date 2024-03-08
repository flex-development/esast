/**
 * @file Type Tests - Comment
 * @module esast/nodes/tests/unit-d/Comment
 */

import * as docast from '@flex-development/docast'
import type { CommentKind } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../comment'

describe('unit-d:nodes/Comment', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CommentData

  it('should extend docast.Comment', () => {
    expectTypeOf<Subject>().toMatchTypeOf<docast.Comment>()
  })

  it('should match [data?: Optional<CommentData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: CommentKind]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<CommentKind>()
  })

  describe('CommentData', () => {
    it('should extend docast.CommentData', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<docast.CommentData>()
    })
  })
})
