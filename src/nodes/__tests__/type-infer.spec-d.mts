/**
 * @file Type Tests - InferType
 * @module esast/nodes/tests/unit-d/InferType
 */

import type * as TestSubject from '#nodes/type-infer'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/InferType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.InferTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: InferTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "inferType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'inferType'>()
  })

  describe('InferTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
