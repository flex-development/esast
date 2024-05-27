/**
 * @file Content - statement
 * @module esast/content/statement
 */

import type {
  BlockStatement,
  BreakableStatementMap,
  BreakStatement,
  ContinueStatement,
  DebuggerStatement,
  DeclarationMap,
  EmptyStatement,
  ExpressionStatement,
  IfStatement,
  LabeledStatement,
  ModuleStatementMap,
  ReturnStatement,
  StaticBlock,
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
 * @extends {BreakableStatementMap}
 * @extends {DeclarationMap}
 * @extends {ModuleStatementMap}
 */
interface StatementMap
  extends BreakableStatementMap, DeclarationMap, ModuleStatementMap {
  blockStatement: BlockStatement
  breakStatement: BreakStatement
  continueStatement: ContinueStatement
  debuggerStatement: DebuggerStatement
  emptyStatement: EmptyStatement
  expressionStatement: ExpressionStatement
  ifStatement: IfStatement
  labeledStatement: LabeledStatement
  returnStatement: ReturnStatement
  staticBlock: StaticBlock
  throwStatement: ThrowStatement
  tryStatement: TryStatement
  withStatement: WithStatement
}

export type { Statement, StatementMap }
