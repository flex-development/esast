/**
 * @file Type Tests - LogicalOperator
 * @module esast/types/tests/unit-d/LogicalOperator
 */

import type TestSubject from '../operator-logical'

describe('unit-d:types/LogicalOperator', () => {
  it('should extract "??"', () => {
    expectTypeOf<TestSubject>().extract<'??'>().not.toBeNever()
  })

  it('should extract "&&"', () => {
    expectTypeOf<TestSubject>().extract<'&&'>().not.toBeNever()
  })

  it('should extract "||"', () => {
    expectTypeOf<TestSubject>().extract<'||'>().not.toBeNever()
  })
})
