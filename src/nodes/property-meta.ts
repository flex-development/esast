/**
 * @file Nodes - MetaProperty
 * @module esast/nodes/MetaProperty
 */

import type {
  Comment,
  Comments,
  Data,
  ImportIdentifier,
  MetaIdentifier,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with meta properties.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MetaPropertyData extends Data {}

/**
 * A meta property (`import.meta`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MetaProperty extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode ImportIdentifier}
   * @see {@linkcode MetaIdentifier}
   */
  children: [
    meta: ImportIdentifier,
    ...comments: Comments,
    property: MetaIdentifier
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MetaPropertyData}
   */
  data?: Optional<MetaPropertyData>

  /**
   * Node type.
   */
  type: 'metaProperty'
}

export type { MetaPropertyData, MetaProperty as default }
