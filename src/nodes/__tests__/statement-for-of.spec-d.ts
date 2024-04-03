/**
 * @file Type Tests - ForOfStatement
 * @module esast/nodes/tests/unit-d/ForOfStatement
 */

import type { Data, ForXStatement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-for-of'

describe('unit-d:nodes/ForOfStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ForOfStatementData

  it('should extend ForXStatement', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ForXStatement>()
  })

  it('should match [await: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('await').toEqualTypeOf<boolean>()
  })

  it('should match [data?: Optional<ForOfStatementData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
