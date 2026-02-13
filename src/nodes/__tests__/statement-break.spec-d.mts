/**
 * @file Type Tests - BreakStatement
 * @module esast/nodes/tests/unit-d/BreakStatement
 */

import type * as TestSubject from '#nodes/statement-break'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/BreakStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BreakStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: BreakStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "breakStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'breakStatement'>()
  })

  describe('BreakStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
