/**
 * @file Type Tests - ExtendsClause
 * @module esast/nodes/tests/unit-d/ExtendsClause
 */

import type * as TestSubject from '#nodes/extends-clause'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ExtendsClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExtendsClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ExtendsClauseData | undefined]', () => {
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
