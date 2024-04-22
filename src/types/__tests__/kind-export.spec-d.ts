/**
 * @file Type Tests - ExportKind
 * @module esast/types/tests/unit-d/ExportKind
 */

import type TestSubject from '../kind-export'

describe('unit-d:types/ExportKind', () => {
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
