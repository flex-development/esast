/**
 * @file Type Tests - BlockStatement
 * @module esast/nodes/tests/unit-d/BlockStatement
 */

import type { Comment, Data, Parent, Statement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-block'

describe('unit-d:nodes/BlockStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Statement)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Statement)[]>()
  })

  it('should match [data?: Optional<BlockStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "blockStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'blockStatement'>()
  })

  describe('BlockStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
