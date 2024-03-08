/**
 * @file Nodes - This
 * @module esast/nodes/This
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `this` keywords.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ThisData extends Data {}

/**
 * The `this` keyword.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface This extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ThisData}
   */
  data?: Optional<ThisData>

  /**
   * Node type.
   */
  type: 'this'
}

export type { ThisData, This as default }
