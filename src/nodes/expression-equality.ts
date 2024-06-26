/**
 * @file Nodes - EqualityExpression
 * @module esast/nodes/EqualityExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  EqualityOperator
} from '@flex-development/esast'

/**
 * Info associated with equality expressions.
 *
 * @see {@linkcode BinaryExpressionData}
 *
 * @extends {BinaryExpressionData}
 */
interface EqualityExpressionData extends BinaryExpressionData {}

/**
 * An equality expression.
 *
 * @see {@linkcode BinaryExpression}
 *
 * @extends {BinaryExpression}
 */
interface EqualityExpression extends BinaryExpression {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode EqualityExpressionData}
   */
  data?: EqualityExpressionData | undefined

  /**
   * Equality operator.
   *
   * @see {@linkcode EqualityOperator}
   */
  operator: EqualityOperator

  /**
   * Node type.
   */
  type: 'equalityExpression'
}

export type { EqualityExpressionData, EqualityExpression as default }
