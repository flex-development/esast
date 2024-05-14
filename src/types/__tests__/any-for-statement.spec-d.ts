/**
 * @file Type Tests - AnyForStatement
 * @module esast/types/tests/unit-d/AnyForStatement
 */

import type {
  ForInStatement,
  ForOfStatement,
  ForStatement
} from '@flex-development/esast'
import type TestSubject from '../any-for-statement'

describe('unit-d:types/AnyForStatement', () => {
  it('should extract ForInStatement', () => {
    expectTypeOf<TestSubject>().extract<ForInStatement>().not.toBeNever()
  })

  it('should extract ForOfStatement', () => {
    expectTypeOf<TestSubject>().extract<ForOfStatement>().not.toBeNever()
  })

  it('should extract ForStatement', () => {
    expectTypeOf<TestSubject>().extract<ForStatement>().not.toBeNever()
  })
})
