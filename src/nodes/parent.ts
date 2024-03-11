/**
 * @file Nodes - Parent
 * @module esast/nodes/Parent
 */

import type { Child, Node } from '@flex-development/esast'

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
   * @see {@linkcode Child}
   */
  children: Child[]
}

export type { Parent as default }
