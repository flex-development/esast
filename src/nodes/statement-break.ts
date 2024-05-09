/**
 * @file Nodes - BreakStatement
 * @module esast/nodes/BreakStatement
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
 * Info associated with `break` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BreakStatementData extends Data {}

/**
 * A `break` statement.
 *
 * `break` statements terminate the current loop or `switch` statement and
 * transfer program control to the statement following the terminated
 * statement. They can also be used to jump past a labeled statement when used
 * within that labeled statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface BreakStatement extends Parent {
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
   * @see {@linkcode BreakStatementData}
   */
  data?: BreakStatementData | undefined

  /**
   * Node type.
   */
  type: 'breakStatement'
}

export type { BreakStatementData, BreakStatement as default }
