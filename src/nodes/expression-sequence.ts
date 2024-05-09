/**
 * @file Nodes - SequenceExpression
 * @module esast/nodes/SequenceExpression
 */

import type { Comment, Data, Expression, Parent } from '@flex-development/esast'

/**
 * Info associated with sequence expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SequenceExpressionData extends Data {}

/**
 * A sequence expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface SequenceExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   */
  children: [
    Exclude<Expression, Pick<SequenceExpression, 'type'>>,
    ...(Comment | Exclude<Expression, Pick<SequenceExpression, 'type'>>)[],
    Exclude<Expression, Pick<SequenceExpression, 'type'>>
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SequenceExpressionData}
   */
  data?: SequenceExpressionData | undefined

  /**
   * Node type.
   */
  type: 'sequenceExpression'
}

export type { SequenceExpressionData, SequenceExpression as default }
