/**
 * @file Nodes - ForInStatement
 * @module esast/nodes/ForInStatement
 */

import type { Data, ForXStatement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `for...in` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ForInStatementData extends Data {}

/**
 * A `for...in` statement.
 *
 * @see {@linkcode ForXStatement}
 *
 * @extends {ForXStatement}
 */
interface ForInStatement extends ForXStatement {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ForInStatementData}
   */
  data?: Optional<ForInStatementData>

  /**
   * Node type.
   */
  type: 'forInStatement'
}

export type { ForInStatementData, ForInStatement as default }
