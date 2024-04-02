/**
 * @file Nodes - RelationalExpression
 * @module esast/nodes/RelationalExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  RelationalOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with relational expressions.
 *
 * @see {@linkcode BinaryExpressionData}
 *
 * @extends {BinaryExpressionData}
 */
interface RelationalExpressionData extends BinaryExpressionData {}

/**
 * A relational expression.
 *
 * @see {@linkcode BinaryExpression}
 *
 * @extends {BinaryExpression}
 */
interface RelationalExpression extends BinaryExpression {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RelationalExpressionData}
   */
  data?: Optional<RelationalExpressionData>

  /**
   * Relational operator.
   *
   * @see {@linkcode RelationalOperator}
   */
  operator: RelationalOperator

  /**
   * Node type.
   */
  type: 'relationalExpression'
}

export type { RelationalExpressionData, RelationalExpression as default }
