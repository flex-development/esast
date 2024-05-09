/**
 * @file Nodes - ArrayExpression
 * @module esast/nodes/ArrayExpression
 */

import type {
  Comment,
  Data,
  Expression,
  Nothing,
  Parent,
  SpreadElement
} from '@flex-development/esast'

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
   * @see {@linkcode Nothing}
   * @see {@linkcode SpreadElement}
   */
  children: (Comment | Expression | Nothing | SpreadElement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayExpressionData}
   */
  data?: ArrayExpressionData | undefined

  /**
   * Node type.
   */
  type: 'arrayExpression'
}

export type { ArrayExpressionData, ArrayExpression as default }
