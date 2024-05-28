/**
 * @file Nodes - NamespaceDeclaration
 * @module esast/nodes/NamespaceDeclaration
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
 * Info associated with `namespace` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NamespaceDeclarationData extends Data {}

/**
 * A `namespace` declaration.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/namespaces.html
 *
 * @extends {Parent}
 */
interface NamespaceDeclaration extends Parent {
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
   * @see {@linkcode NamespaceDeclarationData}
   */
  data?: NamespaceDeclarationData | undefined

  /**
   * Node type.
   */
  type: 'namespaceDeclaration'
}

export type { NamespaceDeclarationData, NamespaceDeclaration as default }
