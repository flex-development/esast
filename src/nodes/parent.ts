/**
 * @file Nodes - Parent
 * @module esast/nodes/Parent
 */

import type { Node } from '@flex-development/esast'

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
   * @see {@linkcode Node}
   */
  children: Node[]
}

export type { Parent as default }
