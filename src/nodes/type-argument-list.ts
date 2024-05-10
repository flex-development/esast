/**
 * @file Nodes - TypeArgumentList
 * @module esast/nodes/TypeArgumentList
 */

import type {
  Comment,
  Data,
  Nothing,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with type argument lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeArgumentListData extends Data {}

/**
 * A type argument list.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeArgumentList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Nothing}
   * @see {@linkcode TypeExpression}
   */
  children: (Comment | Nothing | TypeExpression)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeArgumentListData}
   */
  data?: TypeArgumentListData | undefined

  /**
   * Node type.
   */
  type: 'typeArgumentList'
}

export type { TypeArgumentListData, TypeArgumentList as default }
