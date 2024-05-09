/**
 * @file Type Tests - ImplementsClause
 * @module esast/nodes/tests/unit-d/ImplementsClause
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../implements-clause'

describe('unit-d:nodes/ImplementsClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImplementsClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
