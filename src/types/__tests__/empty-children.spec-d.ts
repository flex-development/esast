/**
 * @file Type Tests - EmptyChildren
 * @module esast/types/tests/unit-d/EmptyChildren
 */

import type TestSubject from '../empty-children'

describe('unit-d:types/EmptyChildren', () => {
  it('should equal []', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<[]>()
  })
})
