/**
 * @file Nodes - DoWhileStatement
 * @module esast/nodes/DoWhileStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `do while` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DoWhileStatementData extends Data {}

/**
 * A `do while` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface DoWhileStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Statement}
   */
  children: [body: Statement, test: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DoWhileStatementData}
   */
  data?: Optional<DoWhileStatementData>

  /**
   * Node type.
   */
  type: 'doWhileStatement'
}

export type { DoWhileStatementData, DoWhileStatement as default }
