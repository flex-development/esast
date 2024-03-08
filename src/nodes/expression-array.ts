/**
 * @file Nodes - ArrayExpression
 * @module esast/nodes/ArrayExpression
 */

import type {
  Comment,
  Data,
  Expression,
  Parent,
  SpreadElement
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

/**
 * Info associated with array expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayExpressionData extends Data {}

/**
 * An array expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrayExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode SpreadElement}
   */
  children: Nullable<Comment | Expression | SpreadElement>[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayExpressionData}
   */
  data?: Optional<ArrayExpressionData>

  /**
   * Node type.
   */
  type: 'arrayExpression'
}

export type { ArrayExpressionData, ArrayExpression as default }
