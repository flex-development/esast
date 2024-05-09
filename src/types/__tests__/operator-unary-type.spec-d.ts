/**
 * @file Type Tests - UnaryTypeOperator
 * @module esast/types/tests/unit-d/UnaryTypeOperator
 */

import type TestSubject from '../operator-unary-type'

describe('unit-d:types/UnaryTypeOperator', () => {
  it('should extract "keyof"', () => {
    expectTypeOf<TestSubject>().extract<'keyof'>().not.toBeNever()
  })

  it('should extract "readonly"', () => {
    expectTypeOf<TestSubject>().extract<'readonly'>().not.toBeNever()
  })

  it('should extract "typeof"', () => {
    expectTypeOf<TestSubject>().extract<'typeof'>().not.toBeNever()
  })

  it('should extract "unique"', () => {
    expectTypeOf<TestSubject>().extract<'unique'>().not.toBeNever()
  })
})
