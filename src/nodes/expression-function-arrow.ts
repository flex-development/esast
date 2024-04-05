/**
 * @file Nodes - ArrowFunctionExpression
 * @module esast/nodes/ArrowFunctionExpression
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  Comments,
  Data,
  Expression,
  ParameterList,
  Parent
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with arrow function expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrowFunctionExpressionData extends Data {
  /**
   * Asynchronous arrow function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/async_function
   */
  async?: Nilable<boolean>
}

/**
 * An arrow function expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrowFunctionExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode ParameterList}
   */
  children: [
    ...comments: Comments,
    params: ParameterList,
    ...comments: InternalComments,
    body: BlockStatement | Expression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrowFunctionExpressionData}
   */
  data?: Optional<ArrowFunctionExpressionData>

  /**
   * Node type.
   */
  type: 'arrowFunctionExpression'
}

export type { ArrowFunctionExpressionData, ArrowFunctionExpression as default }
