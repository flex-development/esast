/**
 * @file Type Tests - statement
 * @module esast/content/tests/unit-d/statement
 */

import type * as TestSubject from '#content/statement'
import type NodeObject from '#tests/types/node-object'
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
  ForStatement,
  IfStatement,
  LabeledStatement,
  ModuleStatementMap,
  ReturnStatement,
  StaticBlock,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  WhileStatement,
  WithStatement
} from '@flex-development/esast'

describe('unit-d:content/statement', () => {
  describe('Statement', () => {
    it('should equal StatementMap[keyof StatementMap]', () => {
      expectTypeOf<TestSubject.Statement>()
        .toEqualTypeOf<TestSubject.StatementMap[keyof TestSubject.StatementMap]>
    })
  })

  describe('StatementMap', () => {
    it('should extend DeclarationMap', () => {
      expectTypeOf<TestSubject.StatementMap>().toExtend<DeclarationMap>()
    })

    it('should extend ModuleStatementMap', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<ModuleStatementMap>()
    })

    it('should match NodeObject<BlockStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<BlockStatement>>()
    })

    it('should match NodeObject<BreakStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<BreakStatement>>()
    })

    it('should match NodeObject<ContinueStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ContinueStatement>>()
    })

    it('should match NodeObject<DebuggerStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<DebuggerStatement>>()
    })

    it('should match NodeObject<DoWhileStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<DoWhileStatement>>()
    })

    it('should match NodeObject<EmptyStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<EmptyStatement>>()
    })

    it('should match NodeObject<ExpressionStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ExpressionStatement>>()
    })

    it('should match NodeObject<ForInStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ForInStatement>>()
    })

    it('should match NodeObject<ForOfStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ForOfStatement>>()
    })

    it('should match NodeObject<ForStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ForStatement>>()
    })

    it('should match NodeObject<IfStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<IfStatement>>()
    })

    it('should match NodeObject<LabeledStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<LabeledStatement>>()
    })

    it('should match NodeObject<ReturnStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ReturnStatement>>()
    })

    it('should match NodeObject<StaticBlock>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<StaticBlock>>()
    })

    it('should match NodeObject<SwitchStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<SwitchStatement>>()
    })

    it('should match NodeObject<ThrowStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<ThrowStatement>>()
    })

    it('should match NodeObject<TryStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<TryStatement>>()
    })

    it('should match NodeObject<WhileStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<WhileStatement>>()
    })

    it('should match NodeObject<WithStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toExtend<NodeObject<WithStatement>>()
    })
  })
})
