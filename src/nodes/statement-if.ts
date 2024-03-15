/**
 * @file Nodes - IfStatement
 * @module esast/nodes/IfStatement
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
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Statement}
   */
  children:
    | [
      ...comments: Comments,
      test: Expression,
      ...comments: InternalComments,
      consequent: Statement
    ]
    | [
      ...comments: Comments,
      test: Expression,
      ...comments: InternalComments,
      consequent: Statement,
      ...comments: InternalComments,
      alternate: Statement
    ]

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
