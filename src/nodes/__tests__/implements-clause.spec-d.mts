/**
 * @file Type Tests - ImplementsClause
 * @module esast/nodes/tests/unit-d/ImplementsClause
 */

import type * as TestSubject from '#nodes/implements-clause'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImplementsClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImplementsClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImplementsClauseData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "implementsClause"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'implementsClause'>()
  })

  describe('ImplementsClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
