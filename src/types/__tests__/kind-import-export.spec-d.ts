/**
 * @file Type Tests - ImportExportKind
 * @module esast/types/tests/unit-d/ImportExportKind
 */

import type TestSubject from '../kind-import-export'

describe('unit-d:types/ImportExportKind', () => {
  it('should extract "assignment"', () => {
    expectTypeOf<TestSubject>().extract<'assignment'>().not.toBeNever()
  })

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
