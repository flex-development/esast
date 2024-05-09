/**
 * @file Nodes - ConditionalExpression
 * @module esast/nodes/ConditionalExpression
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with conditional expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConditionalExpressionData extends Data {}

/**
 * A conditional expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ConditionalExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [
    test: Expression,
    ...comments: Comments,
    alternate: Expression,
    ...comments: InternalComments,
    consequent: Expression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConditionalExpressionData}
   */
  data?: ConditionalExpressionData | undefined

  /**
   * Node type.
   */
  type: 'conditionalExpression'
}

export type { ConditionalExpressionData, ConditionalExpression as default }
