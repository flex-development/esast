/**
 * @file Type Tests - ReturnStatement
 * @module esast/nodes/tests/unit-d/ReturnStatement
 */

import type * as TestSubject from '#nodes/statement-return'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ReturnStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ReturnStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ReturnStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "returnStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'returnStatement'>()
  })

  describe('ReturnStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
