/**
 * @file Nodes - ContinueStatement
 * @module esast/nodes/ContinueStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  EmptyChildren,
  Identifier,
  Parent
} from '@flex-development/esast'

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
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   */
  children:
    | Comments
    | EmptyChildren
    | [...comments: Comments, label: Identifier, ...comments: InternalComments]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ContinueStatementData}
   */
  data?: ContinueStatementData | undefined

  /**
   * Node type.
   */
  type: 'continueStatement'
}

export type { ContinueStatementData, ContinueStatement as default }
