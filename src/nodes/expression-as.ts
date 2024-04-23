/**
 * @file Nodes - AsExpression
 * @module esast/nodes/AsExpression
 */

import type {
  AsClause,
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `as` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AsExpressionData extends Data {}

/**
 * An `as` expression.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
 *
 * @extends {Parent}
 */
interface AsExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode AsClause}
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [expression: Expression, ...comments: Comments, as: AsClause]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AsExpressionData}
   */
  data?: Optional<AsExpressionData>

  /**
   * Node type.
   */
  type: 'asExpression'
}

export type { AsExpressionData, AsExpression as default }
