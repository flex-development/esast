/**
 * @file Nodes - Super
 * @module esast/nodes/Super
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `super` keywords.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SuperData extends Data {}

/**
 * The `super` keyword.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Super extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SuperData}
   */
  data?: Optional<SuperData>

  /**
   * Node type.
   */
  type: 'super'
}

export type { SuperData, Super as default }
