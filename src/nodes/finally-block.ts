/**
 * @file Nodes - FinallyBlock
 * @module esast/nodes/FinallyBlock
 */

import type {
  BlockStatement,
  Comments,
  Data,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `finally` blocks.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FinallyBlockData extends Data {}

/**
 * A `finally` block.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FinallyBlock extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comments}
   */
  children: [...comments: Comments, body: BlockStatement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FinallyBlockData}
   */
  data?: Optional<FinallyBlockData>

  /**
   * Node type.
   */
  type: 'finallyBlock'
}

export type { FinallyBlockData, FinallyBlock as default }
