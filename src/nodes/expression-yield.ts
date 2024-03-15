/**
 * @file Nodes - YieldExpression
 * @module esast/nodes/YieldExpression
 */

import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   */
  children: EmptyArray | [...comments: Comments, argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode YieldExpressionData}
   */
  data?: Optional<YieldExpressionData>

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
