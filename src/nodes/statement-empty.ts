/**
 * @file Nodes - EmptyStatement
 * @module esast/nodes/EmptyStatement
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with empty statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface EmptyStatementData extends Data {}

/**
 * An empty statement.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface EmptyStatement extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode EmptyStatementData}
   */
  data?: Optional<EmptyStatementData>

  /**
   * Node type.
   */
  type: 'emptyStatement'
}

export type { EmptyStatementData, EmptyStatement as default }
