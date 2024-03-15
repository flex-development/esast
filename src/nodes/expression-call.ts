/**
 * @file Nodes - CallExpression
 * @module esast/nodes/CallExpression
 */

import type {
  Comments,
  Data,
  Expression,
  Parent,
  SpreadElement,
  Super
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with call expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CallExpressionData extends Data {}

/**
 * A call expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CallExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode SpreadElement}
   * @see {@linkcode Super}
   */
  children: [
    callee: Expression | Super,
    ...comments: Comments,
    ...arguments: (Expression | SpreadElement)[]
  ]

  /**
   * Boolean indicating if call expression creates an instance object.
   */
  new: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CallExpressionData}
   */
  data?: Optional<CallExpressionData>

  /**
   * Boolean indicating if call expression is part of an optional chain.
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'callExpression'
}

export type { CallExpressionData, CallExpression as default }
