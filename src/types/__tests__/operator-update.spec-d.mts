/**
 * @file Type Tests - UpdateOperator
 * @module esast/types/tests/unit-d/UpdateOperator
 */

import type TestSubject from '#types/operator-update'

describe('unit-d:types/UpdateOperator', () => {
  it('should extract "--"', () => {
    expectTypeOf<TestSubject>().extract<'--'>().not.toBeNever()
  })

  it('should extract "++"', () => {
    expectTypeOf<TestSubject>().extract<'++'>().not.toBeNever()
  })
})
