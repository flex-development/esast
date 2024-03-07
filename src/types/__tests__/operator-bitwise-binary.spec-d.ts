/**
 * @file Type Tests - BitwiseBinaryOperator
 * @module esast/types/tests/unit-d/BitwiseBinaryOperator
 */

import type TestSubject from '../operator-bitwise-binary'

describe('unit-d:types/BitwiseBinaryOperator', () => {
  it('should extract "&"', () => {
    expectTypeOf<TestSubject>().extract<'&'>().not.toBeNever()
  })

  it('should extract "^"', () => {
    expectTypeOf<TestSubject>().extract<'^'>().not.toBeNever()
  })

  it('should extract "|"', () => {
    expectTypeOf<TestSubject>().extract<'|'>().not.toBeNever()
  })
})
