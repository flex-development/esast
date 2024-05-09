/**
 * @file Nodes - ConditionalType
 * @module esast/nodes/ConditionalType
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ExtendsClause,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with conditional types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConditionalTypeData extends Data {}

/**
 * A conditional type.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ConditionalType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ExtendsClause}
   * @see {@linkcode TypeExpression}
   */
  children: [
    type: TypeExpression,
    ...comments: Comments,
    extend: ExtendsClause,
    ...comments: InternalComments,
    alternate: TypeExpression,
    ...comments: InternalComments,
    consequent: TypeExpression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConditionalTypeData}
   */
  data?: ConditionalTypeData | undefined

  /**
   * Node type.
   */
  type: 'conditionalType'
}

export type { ConditionalTypeData, ConditionalType as default }
