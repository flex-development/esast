/**
 * @file Nodes - ArrayPattern
 * @module esast/nodes/ArrayPattern
 */

import type { Comment, Data, Parent, Pattern } from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

/**
 * Info associated with array patterns.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayPatternData extends Data {}

/**
 * An array pattern.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrayPattern extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Pattern}
   */
  children: Nullable<(Comment | Pattern)>[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayPatternData}
   */
  data?: Optional<ArrayPatternData>

  /**
   * Node type.
   */
  type: 'arrayPattern'
}

export type { ArrayPatternData, ArrayPattern as default }
