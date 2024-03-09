/**
 * @file Type Tests - AnyFunction
 * @module esast/types/tests/unit-d/AnyFunction
 */

import type {
  FunctionDeclaration,
  FunctionExpression
} from '@flex-development/esast'
import type TestSubject from '../any-function'

describe('unit-d:types/AnyFunction', () => {
  it('should extract FunctionDeclaration', () => {
    expectTypeOf<TestSubject>().extract<FunctionDeclaration>().not.toBeNever()
  })

  it('should extract FunctionExpression', () => {
    expectTypeOf<TestSubject>().extract<FunctionExpression>().not.toBeNever()
  })
})
