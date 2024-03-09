/**
 * @file Nodes - AwaitExpression
 * @module esast/nodes/AwaitExpression
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Expression}
   */
  children: [argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AwaitExpressionData}
   */
  data?: Optional<AwaitExpressionData>

  /**
   * Node type.
   */
  type: 'awaitExpression'
}

export type { AwaitExpressionData, AwaitExpression as default }
