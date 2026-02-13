/**
 * @file Nodes - NonNullExpression
 * @module esast/nodes/NonNullExpression
 */

import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with non-null expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NonNullExpressionData extends Data {}

/**
 * A non-null assertion expression.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
 *
 * @extends {Parent}
 */
interface NonNullExpression extends Parent {
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
   * @see {@linkcode NonNullExpressionData}
   */
  data?: NonNullExpressionData | undefined

  /**
   * Node type.
   */
  type: 'nonNullExpression'
}

export type { NonNullExpressionData, NonNullExpression as default }
