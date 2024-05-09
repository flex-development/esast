/**
 * @file Type Tests - IndexedAccessType
 * @module esast/nodes/tests/unit-d/IndexedAccessType
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-indexed-access'

describe('unit-d:nodes/IndexedAccessType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IndexedAccessTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: IndexedAccessTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "indexedAccessType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'indexedAccessType'>()
  })

  describe('IndexedAccessTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
