/**
 * @file Nodes - UpdateExpression
 * @module esast/nodes/UpdateExpression
 */

import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent,
  UpdateOperator
} from '@flex-development/esast'

/**
 * Info associated with update expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UpdateExpressionData extends Data {}

/**
 * An update expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface UpdateExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   */
  children:
    | [...comments: Comments, argument: Expression]
    | [argument: Expression, ...comments: Comments]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UpdateExpressionData}
   */
  data?: UpdateExpressionData | undefined

  /**
   * Update operator.
   *
   * @see {@linkcode UpdateOperator}
   */
  operator: UpdateOperator

  /**
   * Boolean indicating if {@linkcode operator} should precede the expression
   * argument. If `false`, the argument should precede `operator`.
   */
  prefix: boolean

  /**
   * Node type.
   */
  type: 'updateExpression'
}

export type { UpdateExpressionData, UpdateExpression as default }
