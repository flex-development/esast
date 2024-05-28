/**
 * @file Type Tests - FromClause
 * @module esast/nodes/tests/unit-d/FromClause
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../from-clause'

describe('unit-d:nodes/FromClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FromClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: FromClauseData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "fromClause"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'fromClause'>()
  })

  describe('FromClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
