/**
 * @file Type Tests - ImportSpecifierKind
 * @module esast/types/tests/unit-d/ImportSpecifierKind
 */

import type TestSubject from '../kind-import-specifier'

describe('unit-d:types/ImportSpecifierKind', () => {
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
