/**
 * @file Nodes - InferType
 * @module esast/nodes/InferType
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ExtendsClause,
  Identifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `infer` types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface InferTypeData extends Data {}

/**
 * An `infer` type.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 *
 * @extends {Parent}
 */
interface InferType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ExtendsClause}
   * @see {@linkcode Identifier}
   */
  children:
    | [
      ...comments: Comments,
      identifier: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause
    ]
    | [...comments: Comments, identifier: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode InferTypeData}
   */
  data?: InferTypeData | undefined

  /**
   * Node type.
   */
  type: 'inferType'
}

export type { InferTypeData, InferType as default }
