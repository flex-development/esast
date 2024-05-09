/**
 * @file Nodes - MemberExpression
 * @module esast/nodes/MemberExpression
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with member expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MemberExpressionData extends Data {}

/**
 * A member expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MemberExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children:
    | [
      object: Expression,
      ...comments: Comments,
      property: Expression
    ]
    | [
      object: Expression,
      ...comments: Comments,
      property: Expression,
      ...comments: InternalComments
    ]

  /**
   * Boolean indicating if member expression property is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MemberExpressionData}
   */
  data?: Optional<MemberExpressionData>

  /**
   * Boolean indicating if member expression is part of an optional chain.
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'memberExpression'
}

export type { MemberExpressionData, MemberExpression as default }
