/**
 * @file Nodes - WhileStatement
 * @module esast/nodes/WhileStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Parent,
  ParenthesizedExpression,
  Statement
} from '@flex-development/esast'

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
   * @see {@linkcode Comment}
   * @see {@linkcode ParenthesizedExpression}
   * @see {@linkcode Statement}
   */
  children: [
    ...comments: Comments,
    test: ParenthesizedExpression,
    ...comments: InternalComments,
    body: Statement
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode WhileStatementData}
   */
  data?: WhileStatementData | undefined

  /**
   * Node type.
   */
  type: 'whileStatement'
}

export type { WhileStatement as default, WhileStatementData }
