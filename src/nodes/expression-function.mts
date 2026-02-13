/**
 * @file Nodes - FunctionExpression
 * @module esast/nodes/FunctionExpression
 */

import type { Data, FunctionLike } from '@flex-development/esast'

/**
 * Info associated with function expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionExpressionData extends Data {}

/**
 * A `function` expression.
 *
 * @see {@linkcode FunctionLike}
 *
 * @extends {FunctionLike}
 */
interface FunctionExpression extends FunctionLike {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionExpressionData}
   */
  data?: FunctionExpressionData | undefined

  /**
   * Node type.
   */
  type: 'functionExpression'
}

export type { FunctionExpression as default, FunctionExpressionData }
