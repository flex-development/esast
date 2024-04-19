/**
 * @file Type Tests - PropertyName
 * @module esast/types/tests/unit-d/PropertyName
 */

import type {
  Identifier,
  NumberLiteral,
  StringLiteral
} from '@flex-development/esast'
import type TestSubject from '../property-name'

describe('unit-d:types/PropertyName', () => {
  it('should extract Identifier', () => {
    expectTypeOf<TestSubject>().extract<Identifier>().not.toBeNever()
  })

  it('should extract NumberLiteral', () => {
    expectTypeOf<TestSubject>().extract<NumberLiteral>().not.toBeNever()
  })

  it('should extract StringLiteral', () => {
    expectTypeOf<TestSubject>().extract<StringLiteral>().not.toBeNever()
  })
})
