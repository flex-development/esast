/**
 * @file Nodes - ArithmeticExpression
 * @module esast/nodes/ArithmeticExpression
 */

import type {
  ArithmeticOperator,
  BinaryExpression,
  BinaryExpressionData
} from '@flex-development/esast'

/**
 * Info associated with arithmetic expressions.
 *
 * @see {@linkcode BinaryExpressionData}
 *
 * @extends {BinaryExpressionData}
 */
interface ArithmeticExpressionData extends BinaryExpressionData {}

/**
 * An arithmetic expression.
 *
 * @see {@linkcode BinaryExpression}
 *
 * @extends {BinaryExpression}
 */
interface ArithmeticExpression extends BinaryExpression {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArithmeticExpressionData}
   */
  data?: ArithmeticExpressionData | undefined

  /**
   * Arithmetic operator.
   *
   * @see {@linkcode ArithmeticOperator}
   */
  operator: ArithmeticOperator

  /**
   * Node type.
   */
  type: 'arithmeticExpression'
}

export type { ArithmeticExpressionData, ArithmeticExpression as default }
