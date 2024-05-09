/**
 * @file Nodes - AwaitExpression
 * @module esast/nodes/AwaitExpression
 */

import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `await` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AwaitExpressionData extends Data {}

/**
 * An `await` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface AwaitExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [...comments: Comments, argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AwaitExpressionData}
   */
  data?: AwaitExpressionData | undefined

  /**
   * Node type.
   */
  type: 'awaitExpression'
}

export type { AwaitExpressionData, AwaitExpression as default }
