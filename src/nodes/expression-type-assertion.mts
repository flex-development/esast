/**
 * @file Nodes - TypeAssertionExpression
 * @module esast/nodes/TypeAssertionExpression
 */

import type {
  Comments,
  Data,
  Expression,
  Parent,
  TypeAssertion
} from '@flex-development/esast'

/**
 * Info associated with type assertion expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeAssertionExpressionData extends Data {}

/**
 * A type assertion expression.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
 *
 * @extends {Parent}
 */
interface TypeAssertionExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode TypeAssertion}
   */
  children: [
    assertion: TypeAssertion,
    ...comments: Comments,
    expression: Expression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeAssertionExpressionData}
   */
  data?: TypeAssertionExpressionData | undefined

  /**
   * Node type.
   */
  type: 'typeAssertionExpression'
}

export type { TypeAssertionExpressionData, TypeAssertionExpression as default }
