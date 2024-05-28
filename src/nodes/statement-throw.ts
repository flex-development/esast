/**
 * @file Nodes - ThrowStatement
 * @module esast/nodes/ThrowStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `throw` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ThrowStatementData extends Data {}

/**
 * A `throw` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ThrowStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [
    ...comments: Comments,
    argument: Expression,
    ...comments: InternalComments
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ThrowStatementData}
   */
  data?: ThrowStatementData | undefined

  /**
   * Node type.
   */
  type: 'throwStatement'
}

export type { ThrowStatement as default, ThrowStatementData }
