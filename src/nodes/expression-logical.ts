/**
 * @file Nodes - LogicalExpression
 * @module esast/nodes/LogicalExpression
 */

import type {
  BinaryExpression,
  BinaryExpressionData,
  LogicalOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with logical expressions.
 *
 * @see {@linkcode BinaryExpressionData}
 *
 * @extends {BinaryExpressionData}
 */
interface LogicalExpressionData extends BinaryExpressionData {}

/**
 * A logical expression.
 *
 * @see {@linkcode BinaryExpression}
 *
 * @extends {BinaryExpression}
 */
interface LogicalExpression extends BinaryExpression {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode LogicalExpressionData}
   */
  data?: Optional<LogicalExpressionData>

  /**
   * Logical operator.
   *
   * @see {@linkcode LogicalOperator}
   */
  operator: LogicalOperator

  /**
   * Node type.
   */
  type: 'logicalExpression'
}

export type { LogicalExpressionData, LogicalExpression as default }
