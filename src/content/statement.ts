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
  IfStatement,
  ThrowStatement
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
  ifStatement: IfStatement
  throwStatement: ThrowStatement
}

export type { Statement, StatementMap }
