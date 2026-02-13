/**
 * @file Content - iterationStatement
 * @module esast/content/iterationStatement
 */

import type {
  DoWhileStatement,
  ForInStatement,
  ForOfStatement,
  ForStatement,
  WhileStatement
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where an iteration statement
 * is expected.
 *
 * To register custom esast nodes, augment {@linkcode IterationStatementMap}.
 * They will be added to this union automatically.
 */
type IterationStatement = IterationStatementMap[keyof IterationStatementMap]

/**
 * Registry of nodes that can occur where an {@linkcode IterationStatement} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface IterationStatementMap {
 *      customIterationStatement: CustomIterationStatement
 *    }
 *  }
 *
 * @see https://tc39.es/ecma262/#sec-iteration-statements
 */
interface IterationStatementMap {
  doWhileStatement: DoWhileStatement
  forInStatement: ForInStatement
  forOfStatement: ForOfStatement
  forStatement: ForStatement
  whileStatement: WhileStatement
}

export type { IterationStatement, IterationStatementMap }
