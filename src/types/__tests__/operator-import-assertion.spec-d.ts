/**
 * @file Type Tests - ImportAssertionOperator
 * @module esast/types/tests/unit-d/ImportAssertionOperator
 */

import type TestSubject from '../operator-import-assertion'

describe('unit-d:types/ImportAssertionOperator', () => {
  it('should extract "assert"', () => {
    expectTypeOf<TestSubject>().extract<'assert'>().not.toBeNever()
  })

  it('should extract "with"', () => {
    expectTypeOf<TestSubject>().extract<'with'>().not.toBeNever()
  })
})
