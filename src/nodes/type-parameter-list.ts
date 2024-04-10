/**
 * @file Nodes - TypeParameterList
 * @module esast/nodes/TypeParameterList
 */

import type {
  Comment,
  Data,
  Parent,
  TypeParameter
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with type parameter lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeParameterListData extends Data {}

/**
 * A type parameter list.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeParameterList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode TypeParameter}
   */
  children: (Comment | TypeParameter)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeParameterListData}
   */
  data?: Optional<TypeParameterListData>

  /**
   * Node type.
   */
  type: 'typeParameterList'
}

export type { TypeParameterListData, TypeParameterList as default }
