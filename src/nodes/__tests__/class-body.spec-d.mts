/**
 * @file Type Tests - ClassBody
 * @module esast/nodes/tests/unit-d/ClassBody
 */

import type * as TestSubject from '#nodes/class-body'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ClassBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ClassBodyData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classBody"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'classBody'>()
  })

  describe('ClassBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
