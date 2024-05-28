/**
 * @file Nodes - ExportDeclaration
 * @module esast/nodes/ExportDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  ClassDeclaration,
  Comments,
  Data,
  Declaration,
  ExportKind,
  ExportSpecifiers,
  Expression,
  FromClause,
  FunctionDeclaration,
  FunctionSignature,
  ImportAssertion,
  ModuleDeclaration,
  NamespaceExport,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with export declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportDeclarationData extends Data {
  /**
   * Type-only export?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: boolean | null | undefined
}

/**
 * An export declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Declaration}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionDeclaration}
   * @see {@linkcode FunctionSignature}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ModuleDeclaration}
   * @see {@linkcode NamespaceExport}
   */
  children:
    | [
      ...comments: Comments,
      declaration:
        | ClassDeclaration
        | FunctionDeclaration
        | FunctionSignature
        | ModuleDeclaration
    ]
    | [
      ...comments: Comments,
      expression: Expression,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers | NamespaceExport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers | NamespaceExport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments
    ]
    | [...comments: Comments, declaration: Declaration]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportDeclarationData}
   */
  data?: ExportDeclarationData | undefined

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: ExportKind

  /**
   * Node type.
   */
  type: 'exportDeclaration'
}

export type { ExportDeclaration as default, ExportDeclarationData }
