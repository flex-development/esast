/**
 * @file Nodes - Nothing
 * @module esast/nodes/Nothing
 */

import type { Literal } from '@flex-development/esast'

/**
 * Nothing.
 *
 * This node can be used to represent a skipped value, such as element in a
 * sparse array, or an optional child node.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Nothing extends Literal {
  /**
   * Node type.
   */
  type: 'nothing'

  /**
   * Plain value.
   */
  value: null | undefined
}

export type { Nothing as default }
