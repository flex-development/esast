/**
 * @file Type Tests - TupleType
 * @module esast/nodes/tests/unit-d/TupleType
 */

import type * as TestSubject from '#nodes/type-tuple'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TupleType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TupleTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TupleTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "tupleType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'tupleType'>()
  })

  describe('TupleTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
