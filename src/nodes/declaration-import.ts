/**
 * @file Nodes - ImportDeclaration
 * @module esast/nodes/ImportDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  CallExpression,
  Comments,
  Data,
  FromClause,
  Identifier,
  ImportAssertion,
  ImportKind,
  ImportSpecifiers,
  NamespaceImport,
  Parent,
  StringLiteral
} from '@flex-development/esast'

/**
 * Info associated with `import` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportDeclarationData extends Data {
  /**
   * Type-only import?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: boolean | null | undefined
}

/**
 * An `import` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallExpression}
   * @see {@linkcode Comments}
   * @see {@linkcode FromClause}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportSpecifiers}
   * @see {@linkcode NamespaceImport}
   * @see {@linkcode StringLiteral}
   */
  children:
    // default + named/namespace
    | [
      ...comments: Comments,
      import: Identifier,
      ...comments: InternalComments,
      imports: ImportSpecifiers | NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      import: Identifier,
      ...comments: InternalComments,
      imports: ImportSpecifiers | NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]
    // default/named/namespace
    | [
      ...comments: Comments,
      imports: Identifier | ImportSpecifiers | NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      imports: Identifier | ImportSpecifiers | NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]
    // assignment
    | [
      ...comments: Comments,
      left: Identifier,
      ...comments: InternalComments,
      right: CallExpression,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      left: Identifier,
      ...comments: InternalComments,
      right: CallExpression,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]
    // effect
    | [
      ...comments: Comments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportDeclarationData}
   */
  data?: ImportDeclarationData | undefined

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: ImportKind

  /**
   * Node type.
   */
  type: 'importDeclaration'
}

export type { ImportDeclaration as default, ImportDeclarationData }
