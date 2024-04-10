/**
 * @file Nodes - IndexedAccessType
 * @module esast/nodes/IndexedAccessType
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with indexed access types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IndexedAccessTypeData extends Data {}

/**
 * An indexed access type.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 *
 * @extends {Parent}
 */
interface IndexedAccessType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [
    type: TypeExpression,
    ...comments: Comments,
    indexer: TypeExpression,
    ...comments: InternalComments
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IndexedAccessTypeData}
   */
  data?: Optional<IndexedAccessTypeData>

  /**
   * Node type.
   */
  type: 'indexedAccessType'
}

export type { IndexedAccessTypeData, IndexedAccessType as default }
