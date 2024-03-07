/**
 * @file Type Tests - EqualityOperator
 * @module esast/types/tests/unit-d/EqualityOperator
 */

import type TestSubject from '../operator-equality'

describe('unit-d:types/EqualityOperator', () => {
  it('should extract "!="', () => {
    expectTypeOf<TestSubject>().extract<'!='>().not.toBeNever()
  })

  it('should extract "!=="', () => {
    expectTypeOf<TestSubject>().extract<'!=='>().not.toBeNever()
  })

  it('should extract "=="', () => {
    expectTypeOf<TestSubject>().extract<'=='>().not.toBeNever()
  })

  it('should extract "==="', () => {
    expectTypeOf<TestSubject>().extract<'==='>().not.toBeNever()
  })
})
