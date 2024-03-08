/**
 * @file Nodes - FunctionExpression
 * @module esast/nodes/FunctionExpression
 */

import type {
  BlockStatement,
  Data,
  Expression,
  Identifier,
  ParameterList,
  Parent
} from '@flex-development/esast'
import type { Nilable, Nullable, Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Identifier}
   * @see {@linkcode ParameterList}
   */
  children: [
    id: Nullable<Identifier>,
    params: ParameterList,
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
