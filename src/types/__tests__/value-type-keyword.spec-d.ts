/**
 * @file Type Tests - TypeKeywordValue
 * @module esast/types/tests/unit-d/TypeKeywordValue
 */

import type TestSubject from '../value-type-keyword'

describe('unit-d:types/TypeKeywordValue', () => {
  it('should extract "any"', () => {
    expectTypeOf<TestSubject>().extract<'any'>().not.toBeNever()
  })

  it('should extract "bigint"', () => {
    expectTypeOf<TestSubject>().extract<'bigint'>().not.toBeNever()
  })

  it('should extract "boolean"', () => {
    expectTypeOf<TestSubject>().extract<'boolean'>().not.toBeNever()
  })

  it('should extract "never"', () => {
    expectTypeOf<TestSubject>().extract<'never'>().not.toBeNever()
  })

  it('should extract "number"', () => {
    expectTypeOf<TestSubject>().extract<'number'>().not.toBeNever()
  })

  it('should extract "object"', () => {
    expectTypeOf<TestSubject>().extract<'object'>().not.toBeNever()
  })

  it('should extract "string"', () => {
    expectTypeOf<TestSubject>().extract<'string'>().not.toBeNever()
  })

  it('should extract "symbol"', () => {
    expectTypeOf<TestSubject>().extract<'symbol'>().not.toBeNever()
  })

  it('should extract "unknown"', () => {
    expectTypeOf<TestSubject>().extract<'unknown'>().not.toBeNever()
  })

  it('should extract "void"', () => {
    expectTypeOf<TestSubject>().extract<'void'>().not.toBeNever()
  })
})
