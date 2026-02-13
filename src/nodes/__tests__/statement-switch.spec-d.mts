/**
 * @file Type Tests - SwitchStatement
 * @module esast/nodes/tests/unit-d/SwitchStatement
 */

import type * as TestSubject from '#nodes/statement-switch'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/SwitchStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SwitchStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: SwitchStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "switchStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'switchStatement'>()
  })

  describe('SwitchStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
