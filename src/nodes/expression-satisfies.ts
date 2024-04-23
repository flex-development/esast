/**
 * @file Nodes - SatisfiesExpression
 * @module esast/nodes/SatisfiesExpression
 */

import type {
  Comments,
  Data,
  Expression,
  Parent,
  SatisfiesClause
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `satisfies` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SatisfiesExpressionData extends Data {}

/**
 * A `satisfies` expression.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator
 *
 * @extends {Parent}
 */
interface SatisfiesExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode SatisfiesClause}
   */
  children: [
    expression: Expression,
    ...comments: Comments,
    satisfies: SatisfiesClause
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SatisfiesExpressionData}
   */
  data?: Optional<SatisfiesExpressionData>

  /**
   * Node type.
   */
  type: 'satisfiesExpression'
}

export type { SatisfiesExpressionData, SatisfiesExpression as default }
