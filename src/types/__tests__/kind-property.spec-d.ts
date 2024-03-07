/**
 * @file Type Tests - PropertyKind
 * @module esast/types/tests/unit-d/PropertyKind
 */

import type TestSubject from '../kind-property'

describe('unit-d:types/PropertyKind', () => {
  it('should extract "get"', () => {
    expectTypeOf<TestSubject>().extract<'get'>().not.toBeNever()
  })

  it('should extract "init"', () => {
    expectTypeOf<TestSubject>().extract<'init'>().not.toBeNever()
  })

  it('should extract "set"', () => {
    expectTypeOf<TestSubject>().extract<'set'>().not.toBeNever()
  })
})
