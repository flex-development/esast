/**
 * @file Type Tests - EqualityOperator
 * @module esast/types/tests/unit-d/EqualityOperator
 */

import type TestSubject from '#types/operator-equality'

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
