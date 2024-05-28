/**
 * @file Nodes - StaticBlock
 * @module esast/nodes/StaticBlock
 */

import type {
  Comments,
  Data,
  Parent,
  StaticBlockBody
} from '@flex-development/esast'

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
   * @see {@linkcode Comments}
   * @see {@linkcode StaticBlockBody}
   */
  children: [...comments: Comments, body: StaticBlockBody]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode StaticBlockData}
   */
  data?: StaticBlockData | undefined

  /**
   * Node type.
   */
  type: 'staticBlock'
}

export type { StaticBlock as default, StaticBlockData }
