/**
 * @file Nodes - BitwiseExpression
 * @module esast/nodes/BitwiseExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  BitwiseOperator
} from '@flex-development/esast'

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
  data?: BitwiseExpressionData | undefined

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
