/**
 * @file Type Tests - ForOfStatement
 * @module esast/nodes/tests/unit-d/ForOfStatement
 */

import type * as TestSubject from '#nodes/statement-for-of'
import type { Data, ForXStatement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ForOfStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ForOfStatementData

  it('should extend ForXStatement', () => {
    expectTypeOf<Subject>().toExtend<ForXStatement>()
  })

  it('should match [await: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('await').toEqualTypeOf<boolean>()
  })

  it('should match [data?: ForOfStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "forOfStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'forOfStatement'>()
  })

  describe('ForOfStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
