/**
 * @file Type Tests - TypeArgumentList
 * @module esast/nodes/tests/unit-d/TypeArgumentList
 */

import type * as TestSubject from '#nodes/type-argument-list'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TypeArgumentList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeArgumentListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TypeArgumentListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeArgumentList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeArgumentList'>()
  })

  describe('TypeArgumentListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
