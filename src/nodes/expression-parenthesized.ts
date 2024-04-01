/**
 * @file Nodes - ParenthesizedExpression
 * @module esast/nodes/ParenthesizedExpression
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with parenthesized expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParenthesizedExpressionData extends Data {}

/**
 * An expression wrapped in parantheses.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ParenthesizedExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   */
  children: [
    ...comments: Comments,
    expression: Expression,
    ...comments: InternalComments
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParenthesizedExpressionData}
   */
  data?: Optional<ParenthesizedExpressionData>

  /**
   * Node type.
   */
  type: 'parenthesizedExpression'
}

export type { ParenthesizedExpressionData, ParenthesizedExpression as default }
