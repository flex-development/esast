/**
 * @file Type Tests - SwitchBody
 * @module esast/nodes/tests/unit-d/SwitchBody
 */

import type * as TestSubject from '#nodes/switch-body'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/SwitchBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SwitchBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: SwitchBodyData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "switchBody"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'switchBody'>()
  })

  describe('SwitchBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
