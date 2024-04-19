/**
 * @file Nodes - ObjectPattern
 * @module esast/nodes/ObjectPattern
 */

import type {
  AssignmentProperty,
  Comment,
  Data,
  Parent,
  RenamedProperty,
  RestElement,
  ShorthandProperty
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
   * @see {@linkcode AssignmentProperty}
   * @see {@linkcode Comment}
   * @see {@linkcode RenamedProperty}
   * @see {@linkcode RestElement}
   * @see {@linkcode ShorthandProperty}
   */
  children: (
    | AssignmentProperty
    | Comment
    | RenamedProperty
    | RestElement
    | ShorthandProperty
  )[]

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
