/**
 * @file Nodes - StaticBlock
 * @module esast/nodes/StaticBlock
 */

import type { Comment, Data, Parent, Statement } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with static initialization blocks.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface StaticBlockData extends Data {}

/**
 * A [static initialization block][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface StaticBlock extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Statement}
   */
  children: (Comment | Statement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode StaticBlockData}
   */
  data?: Optional<StaticBlockData>

  /**
   * Node type.
   */
  type: 'staticBlock'
}

export type { StaticBlockData, StaticBlock as default }
