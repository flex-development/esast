/**
 * @file Nodes - YieldExpression
 * @module esast/nodes/YieldExpression
 */

import type {
  Comments,
  Data,
  EmptyChildren,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `yield` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface YieldExpressionData extends Data {}

/**
 * A `yield` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface YieldExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children:
    | Comments
    | EmptyChildren
    | [...comments: Comments, argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode YieldExpressionData}
   */
  data?: YieldExpressionData | undefined

  /**
   * Boolean indicating if iteration of the current generator is delegated to
   * another [iterable][1] object.
   *
   * If `true`, the `yield*` operator was used instead of `yield`.
   *
   * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol
   */
  delegate: boolean

  /**
   * Node type.
   */
  type: 'yieldExpression'
}

export type { YieldExpressionData, YieldExpression as default }
