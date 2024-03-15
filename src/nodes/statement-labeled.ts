/**
 * @file Nodes - LabeledStatement
 * @module esast/nodes/LabeledStatement
 */

import type {
  Comment,
  Comments,
  Data,
  Identifier,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with labeled statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface LabeledStatementData extends Data {}

/**
 * A labeled statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface LabeledStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode Statement}
   */
  children: [label: Identifier, ...comments: Comments, body: Statement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode LabeledStatementData}
   */
  data?: Optional<LabeledStatementData>

  /**
   * Node type.
   */
  type: 'labeledStatement'
}

export type { LabeledStatementData, LabeledStatement as default }
