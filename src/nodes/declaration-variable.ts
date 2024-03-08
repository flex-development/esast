/**
 * @file Nodes - VariableDeclaration
 * @module esast/nodes/VariableDeclaration
 */

import type {
  Comment,
  Data,
  Parent,
  VariableDeclarator,
  VariableKind
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with variable declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface VariableDeclarationData extends Data {}

/**
 * A variable declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface VariableDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode VariableDeclarator}
   */
  children: (Comment | VariableDeclarator)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode VariableDeclarationData}
   */
  data?: Optional<VariableDeclarationData>

  /**
   * Variable declaration kind.
   *
   * @see {@linkcode VariableKind}
   */
  kind: VariableKind

  /**
   * Node type.
   */
  type: 'variableDeclaration'
}

export type { VariableDeclarationData, VariableDeclaration as default }
