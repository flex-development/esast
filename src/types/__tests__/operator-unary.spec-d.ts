/**
 * @file Type Tests - UnaryOperator
 * @module esast/types/tests/unit-d/UnaryOperator
 */

import type TestSubject from '../operator-unary'

describe('unit-d:types/UnaryOperator', () => {
  it('should extract "-"', () => {
    expectTypeOf<TestSubject>().extract<'-'>().not.toBeNever()
  })

  it('should extract "!"', () => {
    expectTypeOf<TestSubject>().extract<'!'>().not.toBeNever()
  })

  it('should extract "+"', () => {
    expectTypeOf<TestSubject>().extract<'+'>().not.toBeNever()
  })

  it('should extract "~"', () => {
    expectTypeOf<TestSubject>().extract<'~'>().not.toBeNever()
  })

  it('should extract "delete"', () => {
    expectTypeOf<TestSubject>().extract<'delete'>().not.toBeNever()
  })

  it('should extract "typeof"', () => {
    expectTypeOf<TestSubject>().extract<'typeof'>().not.toBeNever()
  })

  it('should extract "void"', () => {
    expectTypeOf<TestSubject>().extract<'void'>().not.toBeNever()
  })
})
