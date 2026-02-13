/**
 * @file Type Tests - RestType
 * @module esast/nodes/tests/unit-d/RestType
 */

import type * as TestSubject from '#nodes/type-rest'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/RestType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.RestTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: RestTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "restType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'restType'>()
  })

  describe('RestTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
