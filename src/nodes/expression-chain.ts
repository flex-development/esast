/**
 * @file Nodes - ChainExpression
 * @module esast/nodes/ChainExpression
 */

import type {
  CallExpression,
  Data,
  MemberExpression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with chain expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ChainExpressionData extends Data {}

/**
 * A chain expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ChainExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallExpression}
   * @see {@linkcode MemberExpression}
   */
  children: [expression: CallExpression | MemberExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ChainExpressionData}
   */
  data?: Optional<ChainExpressionData>

  /**
   * Node type.
   */
  type: 'chainExpression'
}

export type { ChainExpressionData, ChainExpression as default }
