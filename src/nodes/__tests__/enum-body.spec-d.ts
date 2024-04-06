/**
 * @file Type Tests - EnumBody
 * @module esast/nodes/tests/unit-d/EnumBody
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../enum-body'

describe('unit-d:nodes/EnumBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EnumBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<EnumBodyData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "enumBody"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'enumBody'>()
  })

  describe('EnumBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
