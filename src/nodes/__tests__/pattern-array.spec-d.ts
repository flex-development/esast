/**
 * @file Type Tests - ArrayPattern
 * @module esast/nodes/tests/unit-d/ArrayPattern
 */

import type { Comment, Data, Parent, Pattern } from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../pattern-array'

describe('unit-d:nodes/ArrayPattern', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArrayPatternData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: Nullable<(Comment | Pattern)>[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Nullable<(Comment | Pattern)>[]>()
  })

  it('should match [data?: Optional<ArrayPatternData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "arrayPattern"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'arrayPattern'>()
  })

  describe('ArrayPatternData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})