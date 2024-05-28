/**
 * @file Nodes - ClassDeclaration
 * @module esast/nodes/ClassDeclaration
 */

import type { ClassLike, Data } from '@flex-development/esast'

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
 * @see {@linkcode ClassLike}
 *
 * @extends {ClassLike}
 */
interface ClassDeclaration extends ClassLike {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassDeclarationData}
   */
  data?: ClassDeclarationData | undefined

  /**
   * Node type.
   */
  type: 'classDeclaration'
}

export type { ClassDeclarationData, ClassDeclaration as default }
