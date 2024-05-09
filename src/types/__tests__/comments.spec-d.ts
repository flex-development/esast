/**
 * @file Type Tests - Comments
 * @module esast/types/tests/unit-d/Comments
 */

import type { Comment, EmptyChildren } from '@flex-development/esast'
import type TestSubject from '../comments'

describe('unit-d:types/Comments', () => {
  it('should extract EmptyChildren', () => {
    expectTypeOf<TestSubject>().extract<EmptyChildren>().not.toBeNever()
  })

  it('should extract [Comment, ...Comment[]]', () => {
    expectTypeOf<TestSubject>()
      .extract<[Comment, ...Comment[]]>()
      .not.toBeNever()
  })
})
