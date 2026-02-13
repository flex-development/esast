/**
 * @file Nodes - EmptyStatement
 * @module esast/nodes/EmptyStatement
 */

import type { Data, Node } from '@flex-development/esast'

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
  data?: EmptyStatementData | undefined

  /**
   * Node type.
   */
  type: 'emptyStatement'
}

export type { EmptyStatementData, EmptyStatement as default }
