/**
 * @file Type Tests - UnionType
 * @module esast/nodes/tests/unit-d/UnionType
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-union'

describe('unit-d:nodes/UnionType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UnionTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: UnionTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "unionType"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'unionType'>()
  })

  describe('UnionTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
