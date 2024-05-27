/**
 * @file Type Tests - SwitchBody
 * @module esast/nodes/tests/unit-d/SwitchBody
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../switch-body'

describe('unit-d:nodes/SwitchBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SwitchBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
