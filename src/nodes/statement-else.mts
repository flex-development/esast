/**
 * @file Nodes - ElseStatement
 * @module esast/nodes/ElseStatement
 */

import type {
  Comments,
  Data,
  Parent,
  Statement
} from '@flex-development/esast'

/**
 * Info associated with `else` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ElseStatementData extends Data {}

/**
 * An `else` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ElseStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Statement}
   */
  children: [...comments: Comments, alternate: Statement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ElseStatementData}
   */
  data?: ElseStatementData | undefined

  /**
   * Node type.
   */
  type: 'elseStatement'
}

export type { ElseStatement as default, ElseStatementData }
