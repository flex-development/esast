/**
 * @file Nodes - SwitchCase
 * @module esast/nodes/SwitchCase
 */

import type {
  Data,
  Expression,
  Nothing,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `switch` cases.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SwitchCaseData extends Data {}

/**
 * A `switch` case.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface SwitchCase extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Nothing}
   * @see {@linkcode Statement}
   */
  children: [test: Expression | Nothing, ...consequent: Statement[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SwitchCaseData}
   */
  data?: Optional<SwitchCaseData>

  /**
   * Node type.
   */
  type: 'switchCase'
}

export type { SwitchCaseData, SwitchCase as default }
