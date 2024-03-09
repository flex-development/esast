/**
 * @file Nodes - WhileStatement
 * @module esast/nodes/WhileStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `while` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface WhileStatementData extends Data {}

/**
 * A `while` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface WhileStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Statement}
   */
  children: [test: Expression, body: Statement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode WhileStatementData}
   */
  data?: Optional<WhileStatementData>

  /**
   * Node type.
   */
  type: 'whileStatement'
}

export type { WhileStatementData, WhileStatement as default }
