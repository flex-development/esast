/**
 * @file Type Tests - StaticBlock
 * @module esast/nodes/tests/unit-d/StaticBlock
 */

import type { Comment, Data, Parent, Statement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../static-block'

describe('unit-d:nodes/StaticBlock', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.StaticBlockData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Statement)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Statement)[]>()
  })

  it('should match [data?: Optional<StaticBlockData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "staticBlock"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'staticBlock'>()
  })

  describe('StaticBlockData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
