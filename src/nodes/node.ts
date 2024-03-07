/**
 * @file Nodes - Node
 * @module esast/nodes/Node
 */

import type { Data } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
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
  data?: Optional<Data>
}

export type { Node as default }
