/**
 * @file Nodes - ConditionalExpression
 * @module esast/nodes/ConditionalExpression
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
   * @see {@linkcode Comment}
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
  data?: Optional<ConditionalExpressionData>

  /**
   * Node type.
   */
  type: 'conditionalExpression'
}

export type { ConditionalExpressionData, ConditionalExpression as default }
