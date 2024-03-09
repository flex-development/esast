/**
 * @file Nodes - ExportDefaultDeclaration
 * @module esast/nodes/ExportDefaultDeclaration
 */

import type {
  ClassDeclaration,
  Data,
  Expression,
  FunctionDeclaration,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with default `export` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportDefaultDeclarationData extends Data {}

/**
 * A default `export` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportDefaultDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassDeclaration}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionDeclaration}
   */
  children: [declaration: ClassDeclaration | Expression | FunctionDeclaration]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportDefaultDeclarationData}
   */
  data?: Optional<ExportDefaultDeclarationData>

  /**
   * Node type.
   */
  type: 'exportDefaultDeclaration'
}

export type {
  ExportDefaultDeclarationData,
  ExportDefaultDeclaration as default
}
