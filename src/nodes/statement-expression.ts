/**
 * @file Nodes - ExpressionStatement
 * @module esast/nodes/ExpressionStatement
 */

import type {
  Comments,
  Data,
  Expression,
  Parent,
  SpreadElement
} from '@flex-development/esast'

/**
 * Info associated with expression statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExpressionStatementData extends Data {}

/**
 * An expression statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExpressionStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode SpreadElement}
   */
  children: [expression: Expression | SpreadElement, ...comments: Comments]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExpressionStatementData}
   */
  data?: ExpressionStatementData | undefined

  /**
   * Node type.
   */
  type: 'expressionStatement'
}

export type { ExpressionStatement as default, ExpressionStatementData }
