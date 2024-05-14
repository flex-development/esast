/**
 * @file Nodes - ImportNamedDeclaration
 * @module esast/nodes/ImportNamedDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Identifier,
  ImportAssertion,
  ImportDeclaration,
  ImportKind,
  ImportSpecifiers,
  StringLiteral
} from '@flex-development/esast'

/**
 * A named `import` declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportNamedDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportSpecifiers}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      specifiers: ImportSpecifiers,
      ...comments: InternalComments,
      source: Identifier | StringLiteral
    ]
    | [
      ...comments: Comments,
      specifiers: ImportSpecifiers,
      ...comments: InternalComments,
      source: StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion
    ]

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: Extract<ImportKind, 'named'>
}

export type { ImportNamedDeclaration as default }
