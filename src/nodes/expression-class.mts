/**
 * @file Nodes - ClassExpression
 * @module esast/nodes/ClassExpression
 */

import type { ClassLike, Data } from '@flex-development/esast'

/**
 * Info associated with `class` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassExpressionData extends Data {}

/**
 * A `class` expression.
 *
 * @see {@linkcode ClassLike}
 *
 * @extends {ClassLike}
 */
interface ClassExpression extends ClassLike {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassExpressionData}
   */
  data?: ClassExpressionData | undefined

  /**
   * Node type.
   */
  type: 'classExpression'
}

export type { ClassExpressionData, ClassExpression as default }
