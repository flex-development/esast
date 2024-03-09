/**
 * @file Nodes - UnaryExpression
 * @module esast/nodes/UnaryExpression
 */

import type {
  Data,
  Expression,
  Parent,
  UnaryOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with unary expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnaryExpressionData extends Data {}

/**
 * A unary expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface UnaryExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   */
  children: [argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnaryExpressionData}
   */
  data?: Optional<UnaryExpressionData>

  /**
   * Unary operator.
   *
   * @see {@linkcode UnaryOperator}
   */
  operator: UnaryOperator

  /**
   * Node type.
   */
  type: 'unaryExpression'
}

export type { UnaryExpressionData, UnaryExpression as default }
