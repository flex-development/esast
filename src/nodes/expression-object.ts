/**
 * @file Nodes - ObjectExpression
 * @module esast/nodes/ObjectExpression
 */

import type {
  Comment,
  Data,
  MethodProperty,
  Parent,
  ShorthandProperty,
  SimpleProperty,
  SpreadElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode MethodProperty}
   * @see {@linkcode ShorthandProperty}
   * @see {@linkcode SimpleProperty}
   * @see {@linkcode SpreadElement}
   */
  children: (
    | Comment
    | MethodProperty
    | ShorthandProperty
    | SimpleProperty
    | SpreadElement
  )[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectExpressionData}
   */
  data?: Optional<ObjectExpressionData>

  /**
   * Node type.
   */
  type: 'objectExpression'
}

export type { ObjectExpressionData, ObjectExpression as default }
