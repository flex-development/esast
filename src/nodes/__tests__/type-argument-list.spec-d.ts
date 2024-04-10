/**
 * @file Type Tests - TypeArgumentList
 * @module esast/nodes/tests/unit-d/TypeArgumentList
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-argument-list'

describe('unit-d:nodes/TypeArgumentList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeArgumentListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<TypeArgumentListData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
