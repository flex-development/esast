/**
 * @file Type Tests - TypeParameterList
 * @module esast/nodes/tests/unit-d/TypeParameterList
 */

import type * as TestSubject from '#nodes/type-parameter-list'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TypeParameterList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeParameterListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TypeParameterListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeParameterList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeParameterList'>()
  })

  describe('TypeParameterListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
