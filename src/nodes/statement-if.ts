/**
 * @file Nodes - IfStatement
 * @module esast/nodes/IfStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `if` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IfStatementData extends Data {}

/**
 * An `if` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface IfStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Statement}
   */
  children:
    | [test: Expression, consequent: Statement, alternate: Statement]
    | [test: Expression, consequent: Statement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IfStatementData}
   */
  data?: Optional<IfStatementData>

  /**
   * Node type.
   */
  type: 'ifStatement'
}

export type { IfStatementData, IfStatement as default }
