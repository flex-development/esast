/**
 * @file Nodes - FunctionExpression
 * @module esast/nodes/FunctionExpression
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  Comment,
  Comments,
  Data,
  Expression,
  Identifier,
  Nothing,
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
   * Arrow function expression?
   */
  arrow?: Nilable<boolean>

  /**
   * Asynchronous function?
   */
  async?: Nilable<boolean>

  /**
   * Generator function?
   */
  generator?: Nilable<boolean>
}

/**
 * An arrow function expression or `function` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionExpression extends Parent {
  /**
   * List of children.
   *
   * **Note**: Arrow functions can have block statement or expression bodies.
   * Function expressions can only have block statement bodies.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode Nothing}
   * @see {@linkcode ParameterList}
   */
  children: [
    ...comments: Comments,
    id: Identifier | Nothing,
    ...comments: InternalComments,
    params: ParameterList,
    ...comments: InternalComments,
    body: BlockStatement | Expression
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
