/**
 * @file Type Tests - ModifierValue
 * @module esast/types/tests/unit-d/ModifierValue
 */

import type TestSubject from '../value-modifier'

describe('unit-d:types/ModifierValue', () => {
  it('should extract "-"', () => {
    expectTypeOf<TestSubject>().extract<'-'>().not.toBeNever()
  })

  it('should extract "+"', () => {
    expectTypeOf<TestSubject>().extract<'+'>().not.toBeNever()
  })

  it('should extract "abstract"', () => {
    expectTypeOf<TestSubject>().extract<'abstract'>().not.toBeNever()
  })

  it('should extract "accessor"', () => {
    expectTypeOf<TestSubject>().extract<'accessor'>().not.toBeNever()
  })

  it('should extract "const"', () => {
    expectTypeOf<TestSubject>().extract<'const'>().not.toBeNever()
  })

  it('should extract "declare"', () => {
    expectTypeOf<TestSubject>().extract<'declare'>().not.toBeNever()
  })

  it('should extract "get"', () => {
    expectTypeOf<TestSubject>().extract<'get'>().not.toBeNever()
  })

  it('should extract "in"', () => {
    expectTypeOf<TestSubject>().extract<'in'>().not.toBeNever()
  })

  it('should extract "out"', () => {
    expectTypeOf<TestSubject>().extract<'out'>().not.toBeNever()
  })

  it('should extract "override"', () => {
    expectTypeOf<TestSubject>().extract<'override'>().not.toBeNever()
  })

  it('should extract "private"', () => {
    expectTypeOf<TestSubject>().extract<'private'>().not.toBeNever()
  })

  it('should extract "protected"', () => {
    expectTypeOf<TestSubject>().extract<'protected'>().not.toBeNever()
  })

  it('should extract "public"', () => {
    expectTypeOf<TestSubject>().extract<'public'>().not.toBeNever()
  })

  it('should extract "readonly"', () => {
    expectTypeOf<TestSubject>().extract<'readonly'>().not.toBeNever()
  })

  it('should extract "set"', () => {
    expectTypeOf<TestSubject>().extract<'set'>().not.toBeNever()
  })

  it('should extract "static"', () => {
    expectTypeOf<TestSubject>().extract<'static'>().not.toBeNever()
  })
})
