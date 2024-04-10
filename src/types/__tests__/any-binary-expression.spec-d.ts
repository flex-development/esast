/**
 * @file Type Tests - AnyBinaryExpression
 * @module esast/types/tests/unit-d/AnyBinaryExpression
 */

import type {
  ArithmeticExpression,
  BitwiseExpression,
  EqualityExpression,
  LogicalExpression,
  RelationalExpression
} from '@flex-development/esast'
import type TestSubject from '../any-binary-expression'

describe('unit-d:types/AnyBinaryExpression', () => {
  it('should extract ArithmeticExpression', () => {
    expectTypeOf<TestSubject>().extract<ArithmeticExpression>().not.toBeNever()
  })

  it('should extract BitwiseExpression', () => {
    expectTypeOf<TestSubject>().extract<BitwiseExpression>().not.toBeNever()
  })

  it('should extract EqualityExpression', () => {
    expectTypeOf<TestSubject>().extract<EqualityExpression>().not.toBeNever()
  })

  it('should extract LogicalExpression', () => {
    expectTypeOf<TestSubject>().extract<LogicalExpression>().not.toBeNever()
  })

  it('should extract RelationalExpression', () => {
    expectTypeOf<TestSubject>().extract<RelationalExpression>().not.toBeNever()
  })
})
