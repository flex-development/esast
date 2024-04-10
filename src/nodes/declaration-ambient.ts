/**
 * @file Nodes - AmbientDeclaration
 * @module esast/nodes/AmbientDeclaration
 */

import type {
  Comments,
  Data,
  Declaration,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `declare` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AmbientDeclarationData extends Data {}

/**
 * A `declare` declaration.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/modules/reference.html#ambient-modules
 *
 * @extends {Parent}
 */
interface AmbientDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Declaration}
   */
  children: [...comments: Comments, declaration: Declaration]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AmbientDeclarationData}
   */
  data?: Optional<AmbientDeclarationData>

  /**
   * Node type.
   */
  type: 'ambientDeclaration'
}

export type { AmbientDeclarationData, AmbientDeclaration as default }
