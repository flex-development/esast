/**
 * @file Nodes - TryStatement
 * @module esast/nodes/TryStatement
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  CatchClause,
  Comments,
  Data,
  Nothing,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type FinallyBlock from './finally-block'

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
   * @see {@linkcode Comments}
   * @see {@linkcode FinallyBlock}
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
      handler: CatchClause,
      ...comments: InternalComments,
      finalizer: FinallyBlock
    ]
    | [
      ...comments: Comments,
      block: BlockStatement,
      ...comments: InternalComments,
      handler: FinallyBlock
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
