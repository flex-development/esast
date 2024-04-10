/**
 * @file Type Tests - RestType
 * @module esast/nodes/tests/unit-d/RestType
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-rest'

describe('unit-d:nodes/RestType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.RestTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<RestTypeData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "restType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'restType'>()
  })

  describe('RestTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
