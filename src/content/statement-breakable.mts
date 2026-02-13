/**
 * @file Content - breakableStatement
 * @module esast/content/breakableStatement
 */

import type {
  IterationStatementMap,
  SwitchStatement
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a breakable statement is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode  BreakableStatementMap}.
 * They will be added to this union automatically.
 */
type BreakableStatement = BreakableStatementMap[keyof BreakableStatementMap]

/**
 * Registry of nodes that can occur where a {@linkcode  BreakableStatement} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface  BreakableStatementMap {
 *      customBreakableStatement: Custom BreakableStatement
 *    }
 *  }
 *
 * @see https://tc39.es/ecma262/#prod-BreakableStatement
 *
 * @extends {IterationStatementMap}
 */
interface BreakableStatementMap extends IterationStatementMap {
  switchStatement: SwitchStatement
}

export type { BreakableStatement, BreakableStatementMap }
