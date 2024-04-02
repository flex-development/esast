/**
 * @file Nodes - BinaryExpression
 * @module esast/nodes/BinaryExpression
 */

import type {
  BinaryOperator,
  Comments,
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
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [left: Expression, ...comments: Comments, right: Expression]

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
}

export type { BinaryExpressionData, BinaryExpression as default }
