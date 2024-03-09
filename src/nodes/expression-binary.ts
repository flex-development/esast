/**
 * @file Nodes - BinaryExpression
 * @module esast/nodes/BinaryExpression
 */

import type {
  BinaryOperator,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with binary expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BinaryExpressionData extends Data {}

/**
 * A binary expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface BinaryExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   */
  children: [left: Expression, right: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BinaryExpressionData}
   */
  data?: Optional<BinaryExpressionData>

  /**
   * Binary operator.
   *
   * @see {@linkcode BinaryOperator}
   */
  operator: BinaryOperator

  /**
   * Node type.
   */
  type: 'binaryExpression'
}

export type { BinaryExpressionData, BinaryExpression as default }
