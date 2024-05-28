/**
 * @file Type Tests - ImportKind
 * @module esast/types/tests/unit-d/ImportKind
 */

import type TestSubject from '../kind-import'

describe('unit-d:types/ImportKind', () => {
  it('should extract "assignment"', () => {
    expectTypeOf<TestSubject>().extract<'assignment'>().not.toBeNever()
  })

  it('should extract "default"', () => {
    expectTypeOf<TestSubject>().extract<'default'>().not.toBeNever()
  })

  it('should extract "default+named"', () => {
    expectTypeOf<TestSubject>().extract<'default+named'>().not.toBeNever()
  })

  it('should extract "default+namespace"', () => {
    expectTypeOf<TestSubject>().extract<'default+namespace'>().not.toBeNever()
  })

  it('should extract "effect"', () => {
    expectTypeOf<TestSubject>().extract<'effect'>().not.toBeNever()
  })

  it('should extract "named"', () => {
    expectTypeOf<TestSubject>().extract<'named'>().not.toBeNever()
  })

  it('should extract "namespace"', () => {
    expectTypeOf<TestSubject>().extract<'namespace'>().not.toBeNever()
  })
})
