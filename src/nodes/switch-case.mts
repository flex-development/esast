/**
 * @file Nodes - SwitchCase
 * @module esast/nodes/SwitchCase
 */

import type {
  Comment,
  Data,
  Expression,
  Nothing,
  Parent,
  Statement
} from '@flex-development/esast'

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
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Nothing}
   * @see {@linkcode Statement}
   */
  children: [test: Expression | Nothing, ...consequent: (Comment | Statement)[]]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SwitchCaseData}
   */
  data?: SwitchCaseData | undefined

  /**
   * Boolean indicating `default` switch case.
   */
  default: boolean

  /**
   * Node type.
   */
  type: 'switchCase'
}

export type { SwitchCaseData, SwitchCase as default }
