/**
 * @file Nodes - ComputedExpression
 * @module esast/nodes/ComputedExpression
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with computed expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ComputedExpressionData extends Data {}

/**
 * A computed expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ComputedExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
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
   * @see {@linkcode ComputedExpressionData}
   */
  data?: ComputedExpressionData | undefined

  /**
   * Node type.
   */
  type: 'computedExpression'
}

export type { ComputedExpressionData, ComputedExpression as default }
