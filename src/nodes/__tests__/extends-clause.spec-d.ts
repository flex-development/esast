/**
 * @file Type Tests - ExtendsClause
 * @module esast/nodes/tests/unit-d/ExtendsClause
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../extends-clause'

describe('unit-d:nodes/ExtendsClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExtendsClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ExtendsClauseData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "extendsClause"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'extendsClause'>()
  })

  describe('ExtendsClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
