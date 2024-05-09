/**
 * @file Nodes - Node
 * @module esast/nodes/Node
 */

import type { Data } from '@flex-development/esast'
import type unist from 'unist'

/**
 * Abstract esast node.
 *
 * @see {@linkcode unist.Node}
 *
 * @extends {unist.Node}
 */
interface Node extends unist.Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode Data}
   */
  data?: Data | undefined
}

export type { Node as default }
