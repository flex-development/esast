/**
 * @file Type Tests - Comments
 * @module esast/types/tests/unit-d/Comments
 */

import type { Comment } from '@flex-development/esast'
import type { EmptyArray } from '@flex-development/tutils'
import type TestSubject from '../comments'

describe('unit-d:types/Comments', () => {
  it('should extract EmptyArray', () => {
    expectTypeOf<TestSubject>().extract<EmptyArray>().not.toBeNever()
  })

  it('should extract [Comment, ...Comment[]]', () => {
    expectTypeOf<TestSubject>()
      .extract<[Comment, ...Comment[]]>()
      .not.toBeNever()
  })
})
