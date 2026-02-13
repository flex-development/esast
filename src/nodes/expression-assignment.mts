/**
 * @file Nodes - AssignmentExpression
 * @module esast/nodes/AssignmentExpression
 */

import type {
  AssignmentOperator,
  Comments,
  Data,
  Expression,
  Parent,
  Pattern
} from '@flex-development/esast'

/**
 * Info associated with assignment expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AssignmentExpressionData extends Data {}

/**
 * An assignment expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface AssignmentExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   */
  children: [left: Pattern, ...comments: Comments, right: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AssignmentExpressionData}
   */
  data?: AssignmentExpressionData | undefined

  /**
   * Assignment operator.
   *
   * @see {@linkcode AssignmentOperator}
   */
  operator: AssignmentOperator

  /**
   * Node type.
   */
  type: 'assignmentExpression'
}

export type { AssignmentExpressionData, AssignmentExpression as default }
