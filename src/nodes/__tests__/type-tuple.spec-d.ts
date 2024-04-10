/**
 * @file Type Tests - TupleType
 * @module esast/nodes/tests/unit-d/TupleType
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-tuple'

describe('unit-d:nodes/TupleType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TupleTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<TupleTypeData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "tupleType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'tupleType'>()
  })

  describe('TupleTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
