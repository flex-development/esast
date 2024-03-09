/**
 * @file Nodes - SequenceExpression
 * @module esast/nodes/SequenceExpression
 */

import type { Comment, Data, Expression, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
  children: (Comment | Expression)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SequenceExpressionData}
   */
  data?: Optional<SequenceExpressionData>

  /**
   * Node type.
   */
  type: 'sequenceExpression'
}

export type { SequenceExpressionData, SequenceExpression as default }
