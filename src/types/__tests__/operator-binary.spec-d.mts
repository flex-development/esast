/**
 * @file Type Tests - BinaryOperator
 * @module esast/types/tests/unit-d/BinaryOperator
 */

import type TestSubject from '#types/operator-binary'
import type {
  ArithmeticOperator,
  BitwiseOperator,
  EqualityOperator,
  LogicalOperator,
  RelationalOperator
} from '@flex-development/esast'

describe('unit-d:types/BinaryOperator', () => {
  it('should extract ArithmeticOperator', () => {
    expectTypeOf<TestSubject>().extract<ArithmeticOperator>().not.toBeNever()
  })

  it('should extract BitwiseOperator', () => {
    expectTypeOf<TestSubject>().extract<BitwiseOperator>().not.toBeNever()
  })

  it('should extract EqualityOperator', () => {
    expectTypeOf<TestSubject>().extract<EqualityOperator>().not.toBeNever()
  })

  it('should extract LogicalOperator', () => {
    expectTypeOf<TestSubject>().extract<LogicalOperator>().not.toBeNever()
  })

  it('should extract RelationalOperator', () => {
    expectTypeOf<TestSubject>().extract<RelationalOperator>().not.toBeNever()
  })
})
