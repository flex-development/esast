/**
 * @file Nodes - ContinueStatement
 * @module esast/nodes/ContinueStatement
 */

import type {
  Comment,
  Comments,
  Data,
  EmptyChildren,
  Identifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `continue` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ContinueStatementData extends Data {}

/**
 * A `continue` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ContinueStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   */
  children: EmptyChildren | [...comments: Comments, label: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ContinueStatementData}
   */
  data?: ContinueStatementData | undefined

  /**
   * Node type.
   */
  type: 'continueStatement'
}

export type { ContinueStatementData, ContinueStatement as default }
