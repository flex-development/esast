/**
 * @file Nodes - ObjectPattern
 * @module esast/nodes/ObjectPattern
 */

import type {
  Comment,
  Data,
  Parent,
  Property,
  RestElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with object patterns.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectPatternData extends Data {}

/**
 * An object pattern.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ObjectPattern extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Property}
   * @see {@linkcode RestElement}
   */
  children: (Comment | Property | RestElement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectPatternData}
   */
  data?: Optional<ObjectPatternData>

  /**
   * Node type.
   */
  type: 'objectPattern'
}

export type { ObjectPatternData, ObjectPattern as default }
