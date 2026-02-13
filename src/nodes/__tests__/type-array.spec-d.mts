/**
 * @file Type Tests - ArrayType
 * @module esast/nodes/tests/unit-d/ArrayType
 */

import type * as TestSubject from '#nodes/type-array'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ArrayType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArrayTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ArrayTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "arrayType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'arrayType'>()
  })

  describe('ArrayTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
