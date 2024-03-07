/**
 * @file Type Tests - ArithmeticOperator
 * @module esast/types/tests/unit-d/ArithmeticOperator
 */

import type TestSubject from '../operator-arithmetic'

describe('unit-d:types/ArithmeticOperator', () => {
  it('should extract "-"', () => {
    expectTypeOf<TestSubject>().extract<'-'>().not.toBeNever()
  })

  it('should extract "*"', () => {
    expectTypeOf<TestSubject>().extract<'*'>().not.toBeNever()
  })

  it('should extract "**"', () => {
    expectTypeOf<TestSubject>().extract<'**'>().not.toBeNever()
  })

  it('should extract "/"', () => {
    expectTypeOf<TestSubject>().extract<'/'>().not.toBeNever()
  })

  it('should extract "%"', () => {
    expectTypeOf<TestSubject>().extract<'%'>().not.toBeNever()
  })

  it('should extract "+"', () => {
    expectTypeOf<TestSubject>().extract<'+'>().not.toBeNever()
  })
})
