/**
 * @file Nodes - DoWhileStatement
 * @module esast/nodes/DoWhileStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'

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
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Statement}
   */
  children: [
    ...comments: Comments,
    body: Statement,
    ...comments: InternalComments,
    test: Expression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DoWhileStatementData}
   */
  data?: DoWhileStatementData | undefined

  /**
   * Node type.
   */
  type: 'doWhileStatement'
}

export type { DoWhileStatementData, DoWhileStatement as default }
