/**
 * @file Nodes - VariableDeclarator
 * @module esast/nodes/VariableDeclarator
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent,
  Pattern,
  TypeAnnotation
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with variable declarators.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface VariableDeclaratorData extends Data {}

/**
 * A variable declarator.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface VariableDeclarator extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      id: Pattern,
      ...comments: Comments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      init: Expression
    ]
    | [id: Pattern, ...comments: Comments, init: Expression]
    | [id: Pattern, ...comments: Comments, type: TypeAnnotation]
    | [id: Pattern]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode VariableDeclaratorData}
   */
  data?: Optional<VariableDeclaratorData>

  /**
   * Node type.
   */
  type: 'variableDeclarator'
}

export type { VariableDeclaratorData, VariableDeclarator as default }
