/**
 * @file Type Tests - BitwiseOperator
 * @module esast/types/tests/unit-d/BitwiseOperator
 */

import type TestSubject from '#types/operator-bitwise'
import type {
  BitwiseBinaryOperator,
  BitwiseShiftOperator
} from '@flex-development/esast'

describe('unit-d:types/BitwiseOperator', () => {
  it('should extract BitwiseBinaryOperator', () => {
    expectTypeOf<TestSubject>().extract<BitwiseBinaryOperator>().not.toBeNever()
  })

  it('should extract BitwiseShiftOperator', () => {
    expectTypeOf<TestSubject>().extract<BitwiseShiftOperator>().not.toBeNever()
  })
})
