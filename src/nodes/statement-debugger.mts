/**
 * @file Nodes - DebuggerStatement
 * @module esast/nodes/DebuggerStatement
 */

import type {
  Comments,
  Data,
  EmptyChildren,
  Parent
} from '@flex-development/esast'

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
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface DebuggerStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode EmptyChildren}
   */
  children: Comments | EmptyChildren

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DebuggerStatementData}
   */
  data?: DebuggerStatementData | undefined

  /**
   * Node type.
   */
  type: 'debuggerStatement'
}

export type { DebuggerStatementData, DebuggerStatement as default }
