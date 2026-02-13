/**
 * @file Type Tests - MappedType
 * @module esast/nodes/tests/unit-d/MappedType
 */

import type * as TestSubject from '#nodes/type-mapped'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/MappedType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MappedTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: MappedTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "mappedType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'mappedType'>()
  })

  describe('MappedTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
