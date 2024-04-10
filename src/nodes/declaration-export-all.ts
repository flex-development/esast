/**
 * @file Nodes - ExportAllDeclaration
 * @module esast/nodes/ExportAllDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  ExportDeclaration,
  ExportSpecifiers,
  Identifier,
  ImportAssertion,
  ImportAttributeClause,
  ImportExportKind,
  StringLiteral
} from '@flex-development/esast'

/**
 * An aggregate `export` declaration.
 *
 * @see {@linkcode ExportDeclaration}
 *
 * @extends {ExportDeclaration}
 */
interface ExportAllDeclaration extends ExportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportAttributeClause}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      source: Identifier | StringLiteral
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion | ImportAttributeClause
    ]
    | [...comments: Comments, source: Identifier | StringLiteral]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ImportExportKind}
   */
  kind: Extract<ImportExportKind, 'namespace'>
}

export type { ExportAllDeclaration as default }
