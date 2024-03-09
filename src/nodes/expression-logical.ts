/**
 * @file Nodes - LogicalExpression
 * @module esast/nodes/LogicalExpression
 */

import type {
  Data,
  Expression,
  LogicalOperator,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with logical expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface LogicalExpressionData extends Data {}

/**
 * A logical expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface LogicalExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   */
  children: [left: Expression, right: Expression]

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
