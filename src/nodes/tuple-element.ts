/**
 * @file Nodes - TupleElement
 * @module esast/nodes/TupleElement
 */

import type {
  Comments,
  Data,
  Identifier,
  Parent,
  RestType,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with tuple elements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TupleElementData extends Data {}

/**
 * A tuple element.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TupleElement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode RestType}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      label: Identifier | RestType,
      ...comments: Comments,
      type: RestType | TypeExpression
    ]
    | [type: RestType | TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TupleElementData}
   */
  data?: TupleElementData | undefined

  /**
   * Optional tuple element?
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'tupleElement'
}

export type { TupleElementData, TupleElement as default }
