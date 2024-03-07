/**
 * @file Type Tests - MethodKind
 * @module esast/types/tests/unit-d/MethodKind
 */

import type TestSubject from '../kind-method'

describe('unit-d:types/MethodKind', () => {
  it('should extract "constructor"', () => {
    expectTypeOf<TestSubject>().extract<'constructor'>().not.toBeNever()
  })

  it('should extract "get"', () => {
    expectTypeOf<TestSubject>().extract<'get'>().not.toBeNever()
  })

  it('should extract "method"', () => {
    expectTypeOf<TestSubject>().extract<'method'>().not.toBeNever()
  })

  it('should extract "set"', () => {
    expectTypeOf<TestSubject>().extract<'set'>().not.toBeNever()
  })
})
