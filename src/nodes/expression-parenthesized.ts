/**
 * @file Nodes - ParenthesizedExpression
 * @module esast/nodes/ParenthesizedExpression
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  EmptyChildren,
  Expression,
  Parent,
  SpreadElement
} from '@flex-development/esast'

/**
 * Info associated with parenthesized expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParenthesizedExpressionData extends Data {}

/**
 * An expression wrapped in parentheses.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ParenthesizedExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode SpreadElement}
   */
  children:
    | Comments
    | EmptyChildren
    | [
      ...comments: Comments,
      expression: Expression | SpreadElement,
      ...comments: InternalComments
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParenthesizedExpressionData}
   */
  data?: ParenthesizedExpressionData | undefined

  /**
   * Node type.
   */
  type: 'parenthesizedExpression'
}

export type { ParenthesizedExpression as default, ParenthesizedExpressionData }
