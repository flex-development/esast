/**
 * @file Type Tests - SatisfiesClause
 * @module esast/nodes/tests/unit-d/SatisfiesClause
 */

import type * as TestSubject from '#nodes/satisfies-clause'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/SatisfiesClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SatisfiesClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: SatisfiesClauseData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "satisfiesClause"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'satisfiesClause'>()
  })

  describe('SatisfiesClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
