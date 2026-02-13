/**
 * @file Type Tests - SwitchCase
 * @module esast/nodes/tests/unit-d/SwitchCase
 */

import type * as TestSubject from '#nodes/switch-case'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/SwitchCase', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SwitchCaseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: SwitchCaseData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [default: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('default').toEqualTypeOf<boolean>()
  })

  it('should match [type: "switchCase"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'switchCase'>()
  })

  describe('SwitchCaseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
