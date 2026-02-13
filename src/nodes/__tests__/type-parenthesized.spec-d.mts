/**
 * @file Type Tests - ParenthesizedType
 * @module esast/nodes/tests/unit-d/ParenthesizedType
 */

import type * as TestSubject from '#nodes/type-parenthesized'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ParenthesizedType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParenthesizedTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ParenthesizedTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parenthesizedType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'parenthesizedType'>()
  })

  describe('ParenthesizedTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
