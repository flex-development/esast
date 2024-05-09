/**
 * @file Nodes - ReturnStatement
 * @module esast/nodes/ReturnStatement
 */

import type {
  Comment,
  Comments,
  Data,
  EmptyChildren,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `return` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ReturnStatementData extends Data {}

/**
 * A `return` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ReturnStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   */
  children: EmptyChildren | [...comments: Comments, argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ReturnStatementData}
   */
  data?: ReturnStatementData | undefined

  /**
   * Node type.
   */
  type: 'returnStatement'
}

export type { ReturnStatementData, ReturnStatement as default }
