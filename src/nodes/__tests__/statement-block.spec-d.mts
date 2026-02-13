/**
 * @file Type Tests - BlockStatement
 * @module esast/nodes/tests/unit-d/BlockStatement
 */

import type * as TestSubject from '#nodes/statement-block'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/BlockStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: BlockStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "blockStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'blockStatement'>()
  })

  describe('BlockStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
