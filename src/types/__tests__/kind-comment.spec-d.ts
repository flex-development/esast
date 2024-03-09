/**
 * @file Type Tests - CommentKind
 * @module esast/types/tests/unit-d/CommentKind
 */

import type TestSubject from '../kind-comment'

describe('unit-d:types/CommentKind', () => {
  it('should extract "block"', () => {
    expectTypeOf<TestSubject>().extract<'block'>().not.toBeNever()
  })

  it('should extract "docblock"', () => {
    expectTypeOf<TestSubject>().extract<'docblock'>().not.toBeNever()
  })

  it('should extract "hashbang"', () => {
    expectTypeOf<TestSubject>().extract<'hashbang'>().not.toBeNever()
  })

  it('should extract "line"', () => {
    expectTypeOf<TestSubject>().extract<'line'>().not.toBeNever()
  })
})
