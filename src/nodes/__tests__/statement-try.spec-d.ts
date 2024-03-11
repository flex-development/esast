/**
 * @file Type Tests - TryStatement
 * @module esast/nodes/tests/unit-d/TryStatement
 */

import type {
  BlockStatement,
  CatchClause,
  Data,
  Nothing,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-try'

describe('unit-d:nodes/TryStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TryStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [BlockStatement, CatchClause | Nothing, BlockStatement | Nothing]]', () => {
    // Arrange
    type Expect = [
      BlockStatement,
      CatchClause | Nothing,
      BlockStatement | Nothing
    ]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<TryStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "tryStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'tryStatement'>()
  })

  describe('TryStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
