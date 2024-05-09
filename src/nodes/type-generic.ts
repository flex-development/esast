/**
 * @file Nodes - GenericType
 * @module esast/nodes/GenericType
 */

import type {
  Comments,
  Data,
  Identifier,
  Parent,
  TypeArgumentList
} from '@flex-development/esast'

/**
 * Info associated with generic types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface GenericTypeData extends Data {}

/**
 * A type produced from a generic.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface GenericType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeArgumentList}
   */
  children: [
    generic: Identifier,
    ...comments: Comments,
    arguments: TypeArgumentList
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode GenericTypeData}
   */
  data?: GenericTypeData | undefined

  /**
   * Node type.
   */
  type: 'genericType'
}

export type { GenericTypeData, GenericType as default }
