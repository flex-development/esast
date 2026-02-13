/**
 * @file Type Tests - ConditionalType
 * @module esast/nodes/tests/unit-d/ConditionalType
 */

import type * as TestSubject from '#nodes/type-conditional'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ConditionalType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConditionalTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ConditionalTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "conditionalType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'conditionalType'>()
  })

  describe('ConditionalTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
