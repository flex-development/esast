/**
 * @file Nodes - SwitchStatement
 * @module esast/nodes/SwitchStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent,
  SwitchBody,
  SwitchCase
} from '@flex-development/esast'

/**
 * Info associated with `switch` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SwitchStatementData extends Data {}

/**
 * A `switch` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface SwitchStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode SwitchBody}
   * @see {@linkcode SwitchCase}
   */
  children: [
    ...comments: Comments,
    discriminant: Expression,
    ...comments: InternalComments,
    body: SwitchBody
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SwitchStatementData}
   */
  data?: SwitchStatementData | undefined

  /**
   * Node type.
   */
  type: 'switchStatement'
}

export type { SwitchStatement as default, SwitchStatementData }
