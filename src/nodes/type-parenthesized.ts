/**
 * @file Nodes - ParenthesizedType
 * @module esast/nodes/ParenthesizedType
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
 * Info associated with parenthesized types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParenthesizedTypeData extends Data {}

/**
 * A type expression wrapped in parentheses.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ParenthesizedType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [
    ...comments: Comments,
    type: TypeExpression,
    ...comments: InternalComments
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParenthesizedTypeData}
   */
  data?: Optional<ParenthesizedTypeData>

  /**
   * Node type.
   */
  type: 'parenthesizedType'
}

export type { ParenthesizedTypeData, ParenthesizedType as default }
