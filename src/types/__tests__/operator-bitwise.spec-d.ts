/**
 * @file Type Tests - BitwiseOperator
 * @module esast/types/tests/unit-d/BitwiseOperator
 */

import type {
  BitwiseBinaryOperator,
  BitwiseShiftOperator
} from '@flex-development/esast'
import type TestSubject from '../operator-bitwise'

describe('unit-d:types/BitwiseOperator', () => {
  it('should extract BitwiseBinaryOperator', () => {
    expectTypeOf<TestSubject>().extract<BitwiseBinaryOperator>().not.toBeNever()
  })

  it('should extract BitwiseShiftOperator', () => {
    expectTypeOf<TestSubject>().extract<BitwiseShiftOperator>().not.toBeNever()
  })
})
