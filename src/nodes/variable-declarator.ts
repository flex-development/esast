/**
 * @file Nodes - VariableDeclarator
 * @module esast/nodes/VariableDeclarator
 */

import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent,
  Pattern
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
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   */
  children:
    | [id: Pattern, ...comments: Comments, init: Expression]
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
