/**
 * @file Nodes - FunctionDeclaration
 * @module esast/nodes/FunctionDeclaration
 */

import type { Data, FunctionLike } from '@flex-development/esast'

/**
 * Info associated with function declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionDeclarationData extends Data {}

/**
 * A `function` declaration.
 *
 * @see {@linkcode FunctionLike}
 *
 * @extends {FunctionLike}
 */
interface FunctionDeclaration extends FunctionLike {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionDeclarationData}
   */
  data?: FunctionDeclarationData | undefined

  /**
   * Node type.
   */
  type: 'functionDeclaration'
}

export type { FunctionDeclaration as default, FunctionDeclarationData }
