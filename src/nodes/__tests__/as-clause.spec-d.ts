/**
 * @file Type Tests - AsClause
 * @module esast/nodes/tests/unit-d/AsClause
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../as-clause'

describe('unit-d:nodes/AsClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AsClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<AsClauseData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "asClause"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'asClause'>()
  })

  describe('AsClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
