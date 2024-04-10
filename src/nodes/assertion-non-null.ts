/**
 * @file Nodes - NonNullAssertion
 * @module esast/nodes/NonNullAssertion
 */

import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with non-null assertions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NonNullAssertionData extends Data {}

/**
 * A non-null assertion.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
 *
 * @extends {Parent}
 */
interface NonNullAssertion extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [expression: Expression, ...comments: Comments]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NonNullAssertionData}
   */
  data?: Optional<NonNullAssertionData>

  /**
   * Node type.
   */
  type: 'nonNullAssertion'
}

export type { NonNullAssertionData, NonNullAssertion as default }
