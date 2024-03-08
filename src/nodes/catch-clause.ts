/**
 * @file Nodes - CatchClause
 * @module esast/nodes/CatchClause
 */

import type {
  BlockStatement,
  Data,
  Parent,
  Pattern
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

/**
 * Info associated with `catch` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CatchClauseData extends Data {}

/**
 * A `catch` clause.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CatchClause extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Pattern}
   */
  children: [param: Nullable<Pattern>, body: BlockStatement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CatchClauseData}
   */
  data?: Optional<CatchClauseData>

  /**
   * Node type.
   */
  type: 'catchClause'
}

export type { CatchClauseData, CatchClause as default }
