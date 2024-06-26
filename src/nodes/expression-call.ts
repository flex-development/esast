/**
 * @file Nodes - CallExpression
 * @module esast/nodes/CallExpression
 */

import type { InternalComments } from '#internal'
import type {
  ArgumentList,
  Comments,
  Data,
  Expression,
  Parent,
  TypeArgumentList
} from '@flex-development/esast'

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
   * @see {@linkcode ArgumentList}
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode TypeArgumentList}
   */
  children:
    | [
      callee: Expression,
      ...comments: Comments,
      arguments: ArgumentList
    ]
    | [
      callee: Expression,
      ...comments: Comments,
      typeArguments: TypeArgumentList,
      ...comments: InternalComments,
      arguments: ArgumentList
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CallExpressionData}
   */
  data?: CallExpressionData | undefined

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
