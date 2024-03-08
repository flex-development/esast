/**
 * @file Type Tests - Comment
 * @module esast/types/tests/unit-d/Comment
 */

import type {
  DocblockComment,
  MultiLineComment,
  SingleLineComment
} from '@flex-development/esast'
import type TestSubject from '../comment'

describe('unit-d:types/Comment', () => {
  it('should extract DocblockComment', () => {
    expectTypeOf<TestSubject>().extract<DocblockComment>().not.toBeNever()
  })

  it('should extract MultiLineComment', () => {
    expectTypeOf<TestSubject>().extract<MultiLineComment>().not.toBeNever()
  })

  it('should extract SingleLineComment', () => {
    expectTypeOf<TestSubject>().extract<SingleLineComment>().not.toBeNever()
  })
})
