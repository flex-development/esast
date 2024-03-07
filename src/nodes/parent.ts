/**
 * @file Nodes - Parent
 * @module esast/nodes/Parent
 */

import type { Node } from '@flex-development/esast'
import type { Nilable } from '@flex-development/tutils'

/**
 * Abstract esast node that contains other nodes.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Parent extends Node {
  /**
   * List of children.
   *
   * **Note**: Higher level parent nodes should mark child nodes as optional by
   * using a question mark (`?`) after a tuple element label or by defining
   * `children` as a discriminated union.
   *
   * @see {@linkcode Node}
   */
  children: Nilable<Node>[] | Node[]
}

export type { Parent as default }
