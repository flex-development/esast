/**
 * @file Type Tests - statement
 * @module esast/content/tests/unit-d/statement
 */

import type { NodeObject } from '#tests/types'
import type {
  BlockStatement,
  BreakStatement,
  ContinueStatement,
  DebuggerStatement,
  DeclarationMap,
  DoWhileStatement,
  EmptyStatement,
  ExpressionStatement,
  ForInStatement,
  ForOfStatement,
  IfStatement,
  ThrowStatement
} from '@flex-development/esast'
import type * as TestSubject from '../statement'

describe('unit-d:content/statement', () => {
  describe('Statement', () => {
    it('should equal StatementMap[keyof StatementMap]', () => {
      expectTypeOf<TestSubject.Statement>()
        .toEqualTypeOf<TestSubject.StatementMap[keyof TestSubject.StatementMap]>
    })
  })

  describe('StatementMap', () => {
    it('should extend DeclarationMap', () => {
      expectTypeOf<TestSubject.StatementMap>().toMatchTypeOf<DeclarationMap>()
    })

    it('should match NodeObject<BlockStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<BlockStatement>>()
    })

    it('should match NodeObject<BreakStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<BreakStatement>>()
    })

    it('should match NodeObject<ContinueStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<ContinueStatement>>()
    })

    it('should match NodeObject<DebuggerStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<DebuggerStatement>>()
    })

    it('should match NodeObject<DoWhileStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<DoWhileStatement>>()
    })

    it('should match NodeObject<EmptyStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<EmptyStatement>>()
    })

    it('should match NodeObject<ExpressionStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<ExpressionStatement>>()
    })

    it('should match NodeObject<ForInStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<ForInStatement>>()
    })

    it('should match NodeObject<ForOfStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<ForOfStatement>>()
    })

    it('should match NodeObject<IfStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<IfStatement>>()
    })

    it('should match NodeObject<ThrowStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<ThrowStatement>>()
    })
  })
})
