/**
 * @file Type Tests - NonNullAssertion
 * @module esast/nodes/tests/unit-d/NonNullAssertion
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../assertion-non-null'

describe('unit-d:nodes/NonNullAssertion', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NonNullAssertionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<NonNullAssertionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "nonNullAssertion"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'nonNullAssertion'>()
  })

  describe('NonNullAssertionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
