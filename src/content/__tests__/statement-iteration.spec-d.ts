/**
 * @file Type Tests - iterationStatement
 * @module esast/content/tests/unit-d/iterationStatement
 */

import type { NodeObject } from '#tests/types'
import type {
  DoWhileStatement,
  ForInStatement,
  ForOfStatement,
  ForStatement,
  WhileStatement
} from '@flex-development/esast'
import type * as TestSubject from '../statement-iteration'

describe('unit-d:content/iterationStatement', () => {
  describe('IterationStatement', () => {
    it('should equal IterationStatementMap[keyof IterationStatementMap]', () => {
      // Arrange
      type K = keyof TestSubject.IterationStatementMap
      type Expect = TestSubject.IterationStatementMap[K]

      // Expect
      expectTypeOf<TestSubject.IterationStatement>().toEqualTypeOf<Expect>
    })
  })

  describe('IterationStatementMap', () => {
    it('should match NodeObject<DoWhileStatement>', () => {
      expectTypeOf<TestSubject.IterationStatementMap>()
        .toMatchTypeOf<NodeObject<DoWhileStatement>>()
    })

    it('should match NodeObject<ForInStatement>', () => {
      expectTypeOf<TestSubject.IterationStatementMap>()
        .toMatchTypeOf<NodeObject<ForInStatement>>()
    })

    it('should match NodeObject<ForOfStatement>', () => {
      expectTypeOf<TestSubject.IterationStatementMap>()
        .toMatchTypeOf<NodeObject<ForOfStatement>>()
    })

    it('should match NodeObject<ForStatement>', () => {
      expectTypeOf<TestSubject.IterationStatementMap>()
        .toMatchTypeOf<NodeObject<ForStatement>>()
    })

    it('should match NodeObject<WhileStatement>', () => {
      expectTypeOf<TestSubject.IterationStatementMap>()
        .toMatchTypeOf<NodeObject<WhileStatement>>()
    })
  })
})
