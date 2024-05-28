/**
 * @file Nodes - IfStatement
 * @module esast/nodes/IfStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ElseStatement,
  Parent,
  ParenthesizedExpression,
  Statement
} from '@flex-development/esast'

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
   * @see {@linkcode Comments}
   * @see {@linkcode ParenthesizedExpression}
   * @see {@linkcode Statement}
   */
  children:
    | [
      ...comments: Comments,
      test: ParenthesizedExpression,
      ...comments: InternalComments,
      consequent: Statement
    ]
    | [
      ...comments: Comments,
      test: ParenthesizedExpression,
      ...comments: InternalComments,
      consequent: Statement,
      ...comments: InternalComments,
      alternate: ElseStatement
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IfStatementData}
   */
  data?: IfStatementData | undefined

  /**
   * Node type.
   */
  type: 'ifStatement'
}

export type { IfStatement as default, IfStatementData }
