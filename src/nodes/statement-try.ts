/**
 * @file Nodes - TryStatement
 * @module esast/nodes/TryStatement
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  CatchClause,
  Comment,
  Comments,
  Data,
  Nothing,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with try statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TryStatementData extends Data {}

/**
 * A try statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TryStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode CatchClause}
   * @see {@linkcode Comment}
   * @see {@linkcode Nothing}
   */
  children:
    | [
      ...comments: Comments,
      block: BlockStatement,
      ...comments: InternalComments,
      handler: CatchClause
    ]
    | [
      ...comments: Comments,
      block: BlockStatement,
      ...comments: InternalComments,
      handler: CatchClause | Nothing,
      ...comments: InternalComments,
      finalizer: BlockStatement
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TryStatementData}
   */
  data?: Optional<TryStatementData>

  /**
   * Node type.
   */
  type: 'tryStatement'
}

export type { TryStatementData, TryStatement as default }
