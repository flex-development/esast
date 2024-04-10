/**
 * @file Nodes - TypeAssertion
 * @module esast/nodes/TypeAssertion
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with type assertions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeAssertionData extends Data {}

/**
 * A type assertion.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
 *
 * @extends {Parent}
 */
interface TypeAssertion extends Parent {
  /**
   * Boolean indicating if type assertion uses angle bracket (`<...>`) notation.
   */
  angle: boolean

  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      ...comments: Comments,
      type: TypeExpression,
      ...comments: InternalComments
    ]
    | [
      expression: Expression,
      ...comments: Comments,
      type: TypeExpression
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeAssertionData}
   */
  data?: Optional<TypeAssertionData>

  /**
   * Node type.
   */
  type: 'typeAssertion'
}

export type { TypeAssertionData, TypeAssertion as default }
