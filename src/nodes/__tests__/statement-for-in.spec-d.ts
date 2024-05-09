/**
 * @file Type Tests - ForInStatement
 * @module esast/nodes/tests/unit-d/ForInStatement
 */

import type { Data, ForXStatement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-for-in'

describe('unit-d:nodes/ForInStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ForInStatementData

  it('should extend ForXStatement', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ForXStatement>()
  })

  it('should match [data?: ForInStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "forInStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'forInStatement'>()
  })

  describe('ForInStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
