/**
 * @file Nodes - ForOfStatement
 * @module esast/nodes/ForOfStatement
 */

import type { Data, ForXStatement } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with `for...of` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ForOfStatementData extends Data {
  /**
   * Asynchronous statement?
   */
  await?: Nilable<boolean>
}

/**
 * A `for...of` statement.
 *
 * @see {@linkcode ForXStatement}
 *
 * @extends {ForXStatement}
 */
interface ForOfStatement extends ForXStatement {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ForOfStatementData}
   */
  data?: Optional<ForOfStatementData>

  /**
   * Node type.
   */
  type: 'forOfStatement'
}

export type { ForOfStatementData, ForOfStatement as default }
