/**
 * @file Type Tests - ElseStatement
 * @module esast/nodes/tests/unit-d/ElseStatement
 */

import type * as TestSubject from '#nodes/statement-else'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ElseStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ElseStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ElseStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "elseStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'elseStatement'>()
  })

  describe('ElseStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
