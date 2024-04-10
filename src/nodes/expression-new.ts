/**
 * @file Nodes - NewExpression
 * @module esast/nodes/NewExpression
 */

import type {
  CallExpression,
  Comments,
  Data,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `new` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NewExpressionData extends Data {}

/**
 * A `new` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NewExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallExpression}
   * @see {@linkcode Comments}
   */
  children: [...comments: Comments, call: CallExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NewExpressionData}
   */
  data?: Optional<NewExpressionData>

  /**
   * Node type.
   */
  type: 'newExpression'
}

export type { NewExpressionData, NewExpression as default }
