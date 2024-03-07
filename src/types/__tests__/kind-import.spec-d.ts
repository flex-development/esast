/**
 * @file Type Tests - ImportKind
 * @module esast/types/tests/unit-d/ImportKind
 */

import type TestSubject from '../kind-import'

describe('unit-d:types/ImportKind', () => {
  it('should extract "default"', () => {
    expectTypeOf<TestSubject>().extract<'default'>().not.toBeNever()
  })

  it('should extract "named"', () => {
    expectTypeOf<TestSubject>().extract<'named'>().not.toBeNever()
  })

  it('should extract "namespace"', () => {
    expectTypeOf<TestSubject>().extract<'namespace'>().not.toBeNever()
  })
})
