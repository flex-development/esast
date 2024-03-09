/**
 * @file Type Tests - Content
 * @module esast/content/tests/unit-d/Content
 */

import type {
  Declaration,
  ExportDeclaration,
  Expression,
  Heritage,
  LiteralValue,
  ModuleDeclaration,
  Pattern,
  Primitive,
  RootChild,
  Statement
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

  it('should extract Heritage', () => {
    expectTypeOf<TestSubject>().extract<Heritage>().not.toBeNever()
  })

  it('should extract LiteralValue', () => {
    expectTypeOf<TestSubject>().extract<LiteralValue>().not.toBeNever()
  })

  it('should extract ModuleDeclaration', () => {
    expectTypeOf<TestSubject>().extract<ModuleDeclaration>().not.toBeNever()
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
})
