/**
 * @file Type Tests - CatchClause
 * @module esast/nodes/tests/unit-d/CatchClause
 */

import type {
  BlockStatement,
  Data,
  Parent,
  Pattern
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../catch-clause'

describe('unit-d:nodes/CatchClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CatchClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Nullable<Pattern>, BlockStatement]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Nullable<Pattern>, BlockStatement]>()
  })

  it('should match [data?: Optional<CatchClauseData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
