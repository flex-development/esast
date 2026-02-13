/**
 * @file Type Tests - AnyClass
 * @module esast/types/tests/unit-d/AnyClass
 */

import type TestSubject from '#types/any-class'
import type {
  ClassDeclaration,
  ClassExpression
} from '@flex-development/esast'

describe('unit-d:types/AnyClass', () => {
  it('should extract ClassDeclaration', () => {
    expectTypeOf<TestSubject>().extract<ClassDeclaration>().not.toBeNever()
  })

  it('should extract ClassExpression', () => {
    expectTypeOf<TestSubject>().extract<ClassExpression>().not.toBeNever()
  })
})
