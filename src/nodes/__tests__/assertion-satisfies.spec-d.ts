/**
 * @file Type Tests - SatisfiesAssertion
 * @module esast/nodes/tests/unit-d/SatisfiesAssertion
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../assertion-satisfies'

describe('unit-d:nodes/SatisfiesAssertion', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SatisfiesAssertionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<SatisfiesAssertionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "satisfiesAssertion"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'satisfiesAssertion'>()
  })

  describe('SatisfiesAssertionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
