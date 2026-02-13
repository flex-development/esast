/**
 * @file Type Tests - IntersectionType
 * @module esast/nodes/tests/unit-d/IntersectionType
 */

import type * as TestSubject from '#nodes/type-intersection'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/IntersectionType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IntersectionTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: IntersectionTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "intersectionType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'intersectionType'>()
  })

  describe('IntersectionTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
