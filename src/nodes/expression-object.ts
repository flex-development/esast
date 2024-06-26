/**
 * @file Nodes - ObjectExpression
 * @module esast/nodes/ObjectExpression
 */

import type {
  Comment,
  Data,
  Nothing,
  Parent,
  Property,
  SpreadElement
} from '@flex-development/esast'

/**
 * Info associated with object expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectExpressionData extends Data {}

/**
 * An object expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ObjectExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Nothing}
   * @see {@linkcode Property}
   * @see {@linkcode SpreadElement}
   */
  children: (Comment | Nothing | Property | SpreadElement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectExpressionData}
   */
  data?: ObjectExpressionData | undefined

  /**
   * Node type.
   */
  type: 'objectExpression'
}

export type { ObjectExpression as default, ObjectExpressionData }
