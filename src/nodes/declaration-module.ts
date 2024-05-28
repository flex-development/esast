/**
 * @file Nodes - ModuleDeclaration
 * @module esast/nodes/ModuleDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  ModuleBody,
  Parent,
  StringLiteral
} from '@flex-development/esast'

/**
 * Info associated with `module` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ModuleDeclarationData extends Data {}

/**
 * A `module` declaration.
 *
 * @see {@linkcode Parent}
 * @see https://github.com/tc39/proposal-module-declarations
 * @see https://www.typescriptlang.org/docs/handbook/namespaces.html
 *
 * @extends {Parent}
 */
interface ModuleDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ModuleBody}
   * @see {@linkcode StringLiteral}
   */
  children: [
    ...comments: Comments,
    id: Identifier | StringLiteral,
    ...comments: InternalComments,
    body: ModuleBody
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ModuleDeclarationData}
   */
  data?: ModuleDeclarationData | undefined

  /**
   * Node type.
   */
  type: 'moduleDeclaration'
}

export type { ModuleDeclarationData, ModuleDeclaration as default }
