/**
 * @file Type Tests - GenericType
 * @module esast/nodes/tests/unit-d/GenericType
 */

import type * as TestSubject from '#nodes/type-generic'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/GenericType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.GenericTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: GenericTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "genericType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'genericType'>()
  })

  describe('GenericTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
