/**
 * @file Type Tests - AnyClass
 * @module esast/types/tests/unit-d/AnyClass
 */

import type {
  ClassDeclaration,
  ClassExpression
} from '@flex-development/esast'
import type TestSubject from '../any-class'

describe('unit-d:types/AnyClass', () => {
  it('should extract ClassDeclaration', () => {
    expectTypeOf<TestSubject>().extract<ClassDeclaration>().not.toBeNever()
  })

  it('should extract ClassExpression', () => {
    expectTypeOf<TestSubject>().extract<ClassExpression>().not.toBeNever()
  })
})
