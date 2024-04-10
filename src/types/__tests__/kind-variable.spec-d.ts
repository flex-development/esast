/**
 * @file Type Tests - VariableKind
 * @module esast/types/tests/unit-d/VariableKind
 */

import type TestSubject from '../kind-variable'

describe('unit-d:types/VariableKind', () => {
  it('should extract "await using"', () => {
    expectTypeOf<TestSubject>().extract<'await using'>().not.toBeNever()
  })

  it('should extract "const"', () => {
    expectTypeOf<TestSubject>().extract<'const'>().not.toBeNever()
  })

  it('should extract "let"', () => {
    expectTypeOf<TestSubject>().extract<'let'>().not.toBeNever()
  })

  it('should extract "using"', () => {
    expectTypeOf<TestSubject>().extract<'using'>().not.toBeNever()
  })

  it('should extract "var"', () => {
    expectTypeOf<TestSubject>().extract<'var'>().not.toBeNever()
  })
})
