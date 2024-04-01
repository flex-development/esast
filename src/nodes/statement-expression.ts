/**
 * @file Nodes - ExpressionStatement
 * @module esast/nodes/ExpressionStatement
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Expression}
   */
  children: [expression: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExpressionStatementData}
   */
  data?: Optional<ExpressionStatementData>

  /**
   * Node type.
   */
  type: 'expressionStatement'
}

export type { ExpressionStatementData, ExpressionStatement as default }
