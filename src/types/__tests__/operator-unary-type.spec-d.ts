/**
 * @file Type Tests - UnaryTypeOperator
 * @module esast/types/tests/unit-d/UnaryTypeOperator
 */

import type TestSubject from '../operator-unary-type'

describe('unit-d:types/UnaryTypeOperator', () => {
  it('should extract "asserts"', () => {
    expectTypeOf<TestSubject>().extract<'asserts'>().not.toBeNever()
  })

  it('should extract "infer"', () => {
    expectTypeOf<TestSubject>().extract<'infer'>().not.toBeNever()
  })

  it('should extract "keyof"', () => {
    expectTypeOf<TestSubject>().extract<'keyof'>().not.toBeNever()
  })

  it('should extract "readonly"', () => {
    expectTypeOf<TestSubject>().extract<'readonly'>().not.toBeNever()
  })

  it('should extract "typeof"', () => {
    expectTypeOf<TestSubject>().extract<'typeof'>().not.toBeNever()
  })
})
