/**
 * @file Type Tests - EnumMember
 * @module esast/nodes/tests/unit-d/EnumMember
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../enum-member'

describe('unit-d:nodes/EnumMember', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EnumMemberData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<EnumMemberData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "enumMember"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'enumMember'>()
  })

  describe('EnumMemberData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
