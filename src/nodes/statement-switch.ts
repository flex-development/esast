/**
 * @file Nodes - SwitchStatement
 * @module esast/nodes/SwitchStatement
 */

import type {
  Data,
  Expression,
  Parent,
  SwitchCase
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `switch` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SwitchStatementData extends Data {}

/**
 * A `switch` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface SwitchStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode SwitchCase}
   */
  children: [discriminant: Expression, ...cases: SwitchCase[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SwitchStatementData}
   */
  data?: Optional<SwitchStatementData>

  /**
   * Node type.
   */
  type: 'switchStatement'
}

export type { SwitchStatementData, SwitchStatement as default }
