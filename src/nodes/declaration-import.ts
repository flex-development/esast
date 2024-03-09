/**
 * @file Nodes - ImportDeclaration
 * @module esast/nodes/ImportDeclaration
 */

import type {
  Data,
  ImportKind,
  ImportSpecifiers,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `import` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportDeclarationData extends Data {}

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
   * @see {@linkcode ImportSpecifiers}
   * @see {@linkcode StringLiteral}
   */
  children: [specifiers: ImportSpecifiers, source: StringLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportDeclarationData}
   */
  data?: Optional<ImportDeclarationData>

  /**
   * Import kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: ImportKind

  /**
   * Node type.
   */
  type: 'importDeclaration'
}

export type { ImportDeclarationData, ImportDeclaration as default }
