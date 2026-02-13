/**
 * @file Type Tests - TypeAssertion
 * @module esast/nodes/tests/unit-d/TypeAssertion
 */

import type * as TestSubject from '#nodes/type-assertion'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TypeAssertion', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAssertionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TypeAssertionData | undefined]', () => {
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
