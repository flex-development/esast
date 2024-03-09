/**
 * @file Nodes - ClassDeclaration
 * @module esast/nodes/ClassDeclaration
 */

import type {
  ClassBody,
  ClassHeritage,
  Data,
  Identifier,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `class` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassDeclarationData extends Data {}

/**
 * A `class` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassBody}
   * @see {@linkcode ClassHeritage}
   * @see {@linkcode Identifier}
   */
  children: [id: Identifier, heritage: ClassHeritage, body: ClassBody]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassDeclarationData}
   */
  data?: Optional<ClassDeclarationData>

  /**
   * Node type.
   */
  type: 'classDeclaration'
}

export type { ClassDeclarationData, ClassDeclaration as default }
