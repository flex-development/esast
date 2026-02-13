/**
 * @file Type Tests - AnyFunction
 * @module esast/types/tests/unit-d/AnyFunction
 */

import type TestSubject from '#types/any-function'
import type {
  ArrowFunctionExpression,
  FunctionDeclaration,
  FunctionExpression
} from '@flex-development/esast'

describe('unit-d:types/AnyFunction', () => {
  it('should extract ArrowFunctionExpression', () => {
    expectTypeOf<TestSubject>()
      .extract<ArrowFunctionExpression>()
      .not.toBeNever()
  })

  it('should extract FunctionDeclaration', () => {
    expectTypeOf<TestSubject>().extract<FunctionDeclaration>().not.toBeNever()
  })

  it('should extract FunctionExpression', () => {
    expectTypeOf<TestSubject>().extract<FunctionExpression>().not.toBeNever()
  })
})
