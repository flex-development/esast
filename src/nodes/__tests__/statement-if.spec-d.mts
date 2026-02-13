/**
 * @file Type Tests - IfStatement
 * @module esast/nodes/tests/unit-d/IfStatement
 */

import type * as TestSubject from '#nodes/statement-if'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/IfStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IfStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: IfStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "ifStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'ifStatement'>()
  })

  describe('IfStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
