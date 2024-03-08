/**
 * @file Nodes - DebuggerStatement
 * @module esast/nodes/DebuggerStatement
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with debugger statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DebuggerStatementData extends Data {}

/**
 * A `debugger` statement.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface DebuggerStatement extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DebuggerStatementData}
   */
  data?: Optional<DebuggerStatementData>

  /**
   * Node type.
   */
  type: 'debuggerStatement'
}

export type { DebuggerStatementData, DebuggerStatement as default }
