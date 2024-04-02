/**
 * @file Nodes - BitwiseExpression
 * @module esast/nodes/BitwiseExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  BitwiseOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with bitwise expressions.
 *
 * @see {@linkcode BinaryExpressionData}
 *
 * @extends {BinaryExpressionData}
 */
interface BitwiseExpressionData extends BinaryExpressionData {}

/**
 * A bitwise expression.
 *
 * @see {@linkcode BinaryExpression}
 *
 * @extends {BinaryExpression}
 */
interface BitwiseExpression extends BinaryExpression {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BitwiseExpressionData}
   */
  data?: Optional<BitwiseExpressionData>

  /**
   * Bitwise operator.
   *
   * @see {@linkcode BitwiseOperator}
   */
  operator: BitwiseOperator

  /**
   * Node type.
   */
  type: 'bitwiseExpression'
}

export type { BitwiseExpressionData, BitwiseExpression as default }
