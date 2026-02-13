/**
 * @file Type Tests - LabeledStatement
 * @module esast/nodes/tests/unit-d/LabeledStatement
 */

import type * as TestSubject from '#nodes/statement-labeled'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/LabeledStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LabeledStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: LabeledStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "labeledStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'labeledStatement'>()
  })

  describe('LabeledStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
