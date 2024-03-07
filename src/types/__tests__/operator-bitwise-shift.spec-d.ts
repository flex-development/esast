/**
 * @file Type Tests - BitwiseShiftOperator
 * @module esast/types/tests/unit-d/BitwiseShiftOperator
 */

import type TestSubject from '../operator-bitwise-shift'

describe('unit-d:types/BitwiseShiftOperator', () => {
  it('should extract "<<"', () => {
    expectTypeOf<TestSubject>().extract<'<<'>().not.toBeNever()
  })

  it('should extract ">>"', () => {
    expectTypeOf<TestSubject>().extract<'>>'>().not.toBeNever()
  })

  it('should extract ">>>"', () => {
    expectTypeOf<TestSubject>().extract<'>>>'>().not.toBeNever()
  })
})
