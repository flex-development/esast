/**
 * @file Type Tests - WhileStatement
 * @module esast/nodes/tests/unit-d/WhileStatement
 */

import type * as TestSubject from '#nodes/statement-while'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/WhileStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.WhileStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: WhileStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "whileStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'whileStatement'>()
  })

  describe('WhileStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
