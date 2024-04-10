/**
 * @file Nodes - SatisfiesAssertion
 * @module esast/nodes/SatisfiesAssertion
 */

import type {
  Comments,
  Data,
  Expression,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `satisfies` assertions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SatisfiesAssertionData extends Data {}

/**
 * A `satisfies` assertion.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator
 *
 * @extends {Parent}
 */
interface SatisfiesAssertion extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode TypeExpression}
   */
  children: [
    expression: Expression,
    ...comments: Comments,
    satisfies: TypeExpression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SatisfiesAssertionData}
   */
  data?: Optional<SatisfiesAssertionData>

  /**
   * Node type.
   */
  type: 'satisfiesAssertion'
}

export type { SatisfiesAssertionData, SatisfiesAssertion as default }
