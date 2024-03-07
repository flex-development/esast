/**
 * @file Type Tests - RelationalOperator
 * @module esast/types/tests/unit-d/RelationalOperator
 */

import type TestSubject from '../operator-relational'

describe('unit-d:types/RelationalOperator', () => {
  it('should extract "<"', () => {
    expectTypeOf<TestSubject>().extract<'<'>().not.toBeNever()
  })

  it('should extract "<="', () => {
    expectTypeOf<TestSubject>().extract<'<='>().not.toBeNever()
  })

  it('should extract ">"', () => {
    expectTypeOf<TestSubject>().extract<'>'>().not.toBeNever()
  })

  it('should extract ">="', () => {
    expectTypeOf<TestSubject>().extract<'>='>().not.toBeNever()
  })

  it('should extract "in"', () => {
    expectTypeOf<TestSubject>().extract<'in'>().not.toBeNever()
  })

  it('should extract "instanceof"', () => {
    expectTypeOf<TestSubject>().extract<'instanceof'>().not.toBeNever()
  })
})
