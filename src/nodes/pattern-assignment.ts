/**
 * @file Nodes - AssignmentPattern
 * @module esast/nodes/AssignmentPattern
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent,
  Pattern,
  TypeAnnotation
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with assignment patterns.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AssignmentPatternData extends Data {}

/**
 * An assignment pattern.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface AssignmentPattern extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      left: Pattern,
      ...comments: Comments,
      typeAnnotation: TypeAnnotation,
      ...comments: InternalComments,
      right: Expression
    ]
    | [left: Pattern, ...comments: Comments, right: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AssignmentPatternData}
   */
  data?: Optional<AssignmentPatternData>

  /**
   * Node type.
   */
  type: 'assignmentPattern'
}

export type { AssignmentPatternData, AssignmentPattern as default }
