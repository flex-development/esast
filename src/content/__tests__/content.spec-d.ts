/**
 * @file Type Tests - Content
 * @module esast/content/tests/unit-d/Content
 */

import type {
  Declaration,
  ExportDeclaration,
  Expression,
  LiteralValue,
  ModuleStatement,
  Pattern,
  Primitive,
  RootChild,
  Statement,
  TypeDeclaration,
  TypeExpression
} from '@flex-development/esast'
import type TestSubject from '../content'

describe('unit-d:content/Content', () => {
  it('should extract Declaration', () => {
    expectTypeOf<TestSubject>().extract<Declaration>().not.toBeNever()
  })

  it('should extract ExportDeclaration', () => {
    expectTypeOf<TestSubject>().extract<ExportDeclaration>().not.toBeNever()
  })

  it('should extract Expression', () => {
    expectTypeOf<TestSubject>().extract<Expression>().not.toBeNever()
  })

  it('should extract LiteralValue', () => {
    expectTypeOf<TestSubject>().extract<LiteralValue>().not.toBeNever()
  })

  it('should extract ModuleStatement', () => {
    expectTypeOf<TestSubject>().extract<ModuleStatement>().not.toBeNever()
  })

  it('should extract Pattern', () => {
    expectTypeOf<TestSubject>().extract<Pattern>().not.toBeNever()
  })

  it('should extract Primitive', () => {
    expectTypeOf<TestSubject>().extract<Primitive>().not.toBeNever()
  })

  it('should extract RootChild', () => {
    expectTypeOf<TestSubject>().extract<RootChild>().not.toBeNever()
  })

  it('should extract Statement', () => {
    expectTypeOf<TestSubject>().extract<Statement>().not.toBeNever()
  })

  it('should extract TypeDeclaration', () => {
    expectTypeOf<TestSubject>().extract<TypeDeclaration>().not.toBeNever()
  })

  it('should extract TypeExpression', () => {
    expectTypeOf<TestSubject>().extract<TypeExpression>().not.toBeNever()
  })
})
