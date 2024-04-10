/**
 * @file Nodes - TypeArgumentList
 * @module esast/nodes/TypeArgumentList
 */

import type {
  Comment,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode TypeExpression}
   */
  children: (Comment | TypeExpression)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeArgumentListData}
   */
  data?: Optional<TypeArgumentListData>

  /**
   * Node type.
   */
  type: 'typeArgumentList'
}

export type { TypeArgumentListData, TypeArgumentList as default }
