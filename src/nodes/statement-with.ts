/**
 * @file Nodes - WithStatement
 * @module esast/nodes/WithStatement
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
   * @see {@linkcode Comment}
   * @see {@linkcode ParenthesizedExpression}
   * @see {@linkcode Statement}
   */
  children: [
    ...comments: Comments,
    object: ParenthesizedExpression,
    ...comments: InternalComments,
    body: Statement
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode WithStatementData}
   */
  data?: WithStatementData | undefined

  /**
   * Node type.
   */
  type: 'withStatement'
}

export type { WithStatement as default, WithStatementData }
