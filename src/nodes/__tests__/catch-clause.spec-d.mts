/**
 * @file Type Tests - CatchClause
 * @module esast/nodes/tests/unit-d/CatchClause
 */

import type * as TestSubject from '#nodes/catch-clause'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/CatchClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CatchClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: CatchClauseData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "catchClause"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'catchClause'>()
  })

  describe('CatchClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
