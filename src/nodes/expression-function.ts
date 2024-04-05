/**
 * @file Nodes - FunctionExpression
 * @module esast/nodes/FunctionExpression
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  Comments,
  Data,
  Identifier,
  ParameterList,
  Parent
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with function expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionExpressionData extends Data {
  /**
   * Asynchronous function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/async_function
   */
  async?: Nilable<boolean>

  /**
   * Generator function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/function*
   */
  generator?: Nilable<boolean>
}

/**
 * A `function` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ParameterList}
   */
  children:
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      body: BlockStatement
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionExpressionData}
   */
  data?: Optional<FunctionExpressionData>

  /**
   * Node type.
   */
  type: 'functionExpression'
}

export type { FunctionExpressionData, FunctionExpression as default }
