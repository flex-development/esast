/**
 * @file Nodes - ImportSpecifier
 * @module esast/nodes/ImportSpecifier
 */

import type {
  Data,
  Identifier,
  ImportSpecifierKind,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with import specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportSpecifierData extends Data {}

/**
 * An `import` specifier.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportSpecifier extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [imported: Identifier | StringLiteral, local: Identifier]
    | [local: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportSpecifierData}
   */
  data?: Optional<ImportSpecifierData>

  /**
   * Import specifier kind.
   *
   * @see {@linkcode ImportSpecifierKind}
   */
  kind: ImportSpecifierKind

  /**
   * Node type.
   */
  type: 'importSpecifier'
}

export type { ImportSpecifierData, ImportSpecifier as default }
