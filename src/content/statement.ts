/**
 * @file Content - statement
 * @module esast/content/statement
 */

import type {
  BlockStatement,
  BreakStatement,
  ContinueStatement,
  DebuggerStatement,
  DoWhileStatement,
  EmptyStatement
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
 *  declare module '@flex-development/docast' {
 *    interface StatementMap {
 *      customStatement: CustomStatement
 *    }
 *  }
 */
interface StatementMap {
  blockStatement: BlockStatement
  breakStatement: BreakStatement
  continueStatement: ContinueStatement
  debuggerStatement: DebuggerStatement
  doWhileStatement: DoWhileStatement
  emptyStatement: EmptyStatement
}

export type { Statement, StatementMap }
