/**
 * @file Type Tests - EnumBody
 * @module esast/nodes/tests/unit-d/EnumBody
 */

import type * as TestSubject from '#nodes/enum-body'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/EnumBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EnumBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: EnumBodyData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "enumBody"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'enumBody'>()
  })

  describe('EnumBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
