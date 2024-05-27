/**
 * @file Nodes - SwitchBody
 * @module esast/nodes/SwitchBody
 */

import type {
  Comment,
  Data,
  Parent,
  SwitchCase
} from '@flex-development/esast'

/**
 * Info associated with `switch` statement bodies.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SwitchBodyData extends Data {}

/**
 * A `switch` statement body.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface SwitchBody extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode SwitchCase}
   */
  children: (Comment | SwitchCase)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SwitchBodyData}
   */
  data?: SwitchBodyData | undefined

  /**
   * Node type.
   */
  type: 'switchBody'
}

export type { SwitchBody as default, SwitchBodyData }
