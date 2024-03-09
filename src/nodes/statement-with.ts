/**
 * @file Nodes - WithStatement
 * @module esast/nodes/WithStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `with` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface WithStatementData extends Data {}

/**
 * A `with` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface WithStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Statement}
   */
  children: [object: Expression, body: Statement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode WithStatementData}
   */
  data?: Optional<WithStatementData>

  /**
   * Node type.
   */
  type: 'withStatement'
}

export type { WithStatementData, WithStatement as default }
