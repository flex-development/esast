/**
 * @file Nodes - TryStatement
 * @module esast/nodes/TryStatement
 */

import type {
  BlockStatement,
  CatchClause,
  Data,
  Parent
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

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
   */
  children: [
    block: BlockStatement,
    handler?: Nullable<CatchClause>,
    finalizer?: BlockStatement
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
