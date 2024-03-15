/**
 * @file Type Tests - MetaProperty
 * @module esast/nodes/tests/unit-d/MetaProperty
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../property-meta'

describe('unit-d:nodes/MetaProperty', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MetaPropertyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<MetaPropertyData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "metaProperty"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'metaProperty'>()
  })

  describe('MetaPropertyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
