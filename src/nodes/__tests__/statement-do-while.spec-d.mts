/**
 * @file Type Tests - DoWhileStatement
 * @module esast/nodes/tests/unit-d/DoWhileStatement
 */

import type * as TestSubject from '#nodes/statement-do-while'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/DoWhileStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DoWhileStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: DoWhileStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "doWhileStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'doWhileStatement'>()
  })

  describe('DoWhileStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
