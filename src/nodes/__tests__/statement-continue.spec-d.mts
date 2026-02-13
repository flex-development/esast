/**
 * @file Type Tests - ContinueStatement
 * @module esast/nodes/tests/unit-d/ContinueStatement
 */

import type * as TestSubject from '#nodes/statement-continue'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ContinueStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ContinueStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ContinueStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "continueStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'continueStatement'>()
  })

  describe('ContinueStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
