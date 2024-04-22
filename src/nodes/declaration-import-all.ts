/**
 * @file Nodes - ImportAllDeclaration
 * @module esast/nodes/ImportAllDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Identifier,
  ImportAssertion,
  ImportAttributeClause,
  ImportDeclaration,
  ImportKind,
  ImportSpecifiers,
  StringLiteral
} from '@flex-development/esast'

/**
 * An aggregate `import` declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportAllDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportAttributeClause}
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
      attributes: ImportAssertion | ImportAttributeClause
    ]

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: Extract<ImportKind, 'namespace'>
}

export type { ImportAllDeclaration as default }
