/**
 * @file Type Tests - TypeAssertion
 * @module esast/nodes/tests/unit-d/TypeAssertion
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-assertion'

describe('unit-d:nodes/TypeAssertion', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAssertionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<TypeAssertionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeAssertion"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeAssertion'>()
  })

  describe('TypeAssertionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
