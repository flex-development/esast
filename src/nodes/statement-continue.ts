/**
 * @file Nodes - ContinueStatement
 * @module esast/nodes/ContinueStatement
 */

import type { Data, Identifier, Parent } from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'

/**
 * Info associated with `continue` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ContinueStatementData extends Data {}

/**
 * A `continue` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ContinueStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   */
  children: EmptyArray | [label: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ContinueStatementData}
   */
  data?: Optional<ContinueStatementData>

  /**
   * Node type.
   */
  type: 'continueStatement'
}

export type { ContinueStatementData, ContinueStatement as default }
