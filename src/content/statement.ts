/**
 * @file Content - statement
 * @module esast/content/statement
 */

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
  ReturnStatement,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  WithStatement
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a statement is expected.
 *
 * To register custom esast nodes, augment {@linkcode StatementMap}. They will
 * be added to this union automatically.
 */
type Statement = StatementMap[keyof StatementMap]

/**
 * Registry of nodes that can occur where a {@linkcode Statement} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface StatementMap {
 *      customStatement: CustomStatement
 *    }
 *  }
 *
 * @extends {DeclarationMap}
 */
interface StatementMap extends DeclarationMap {
  blockStatement: BlockStatement
  breakStatement: BreakStatement
  continueStatement: ContinueStatement
  debuggerStatement: DebuggerStatement
  doWhileStatement: DoWhileStatement
  emptyStatement: EmptyStatement
  expressionStatement: ExpressionStatement
  forInStatement: ForInStatement
  forOfStatement: ForOfStatement
  forStatement: ForStatement
  ifStatement: IfStatement
  labeledStatement: LabeledStatement
  returnStatement: ReturnStatement
  switchStatement: SwitchStatement
  throwStatement: ThrowStatement
  tryStatement: TryStatement
  withStatement: WithStatement
}

export type { Statement, StatementMap }
