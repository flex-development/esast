/**
 * @file Type Tests - ObjectPattern
 * @module esast/nodes/tests/unit-d/ObjectPattern
 */

import type {
  Comment,
  Data,
  Parent,
  Property,
  RestElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../pattern-object'

describe('unit-d:nodes/ObjectPattern', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectPatternData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Property | RestElement)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Property | RestElement)[]>()
  })

  it('should match [data?: Optional<ObjectPatternData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "objectPattern"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'objectPattern'>()
  })

  describe('ObjectPatternData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
