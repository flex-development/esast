/**
 * @file Nodes - IntersectionType
 * @module esast/nodes/IntersectionType
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with intersection types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IntersectionTypeData extends Data {}

/**
 * An intersection type.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
 *
 * @extends {Parent}
 */
interface IntersectionType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [left: TypeExpression, ...comments: Comments, right: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IntersectionTypeData}
   */
  data?: Optional<IntersectionTypeData>

  /**
   * Node type.
   */
  type: 'intersectionType'
}

export type { IntersectionTypeData, IntersectionType as default }
