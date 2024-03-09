/**
 * @file Nodes - BlockStatement
 * @module esast/nodes/BlockStatement
 */

import type { Comment, Data, Parent, Statement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with block statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface BlockStatementData extends Data {}

/**
 * A block statement.
 *
 * Block statements group zero (`0`) or more statements. The block is delimited
 * by a pair of braces ("curly braces") and contains a list of zero (`0`) or
 * more statements and declarations.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface BlockStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Statement}
   */
  children: (Comment | Statement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BlockStatementData}
   */
  data?: Optional<BlockStatementData>

  /**
   * Node type.
   */
  type: 'blockStatement'
}

export type { BlockStatementData, BlockStatement as default }
