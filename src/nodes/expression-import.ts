/**
 * @file Nodes - ImportExpression
 * @module esast/nodes/ImportExpression
 */

import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `import` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportExpressionData extends Data {}

/**
 * An `import` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   */
  children: [...comments: Comments, source: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportExpressionData}
   */
  data?: Optional<ImportExpressionData>

  /**
   * Node type.
   */
  type: 'importExpression'
}

export type { ImportExpressionData, ImportExpression as default }
