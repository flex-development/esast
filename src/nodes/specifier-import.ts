/**
 * @file Nodes - ImportSpecifier
 * @module esast/nodes/ImportSpecifier
 */

import type {
  Comment,
  Comments,
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with import specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportSpecifierData extends Data {
  /**
   * Type-only import?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: Nilable<boolean>
}

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
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      imported: Identifier | StringLiteral,
      ...comments: Comments,
      local: Identifier
    ]
    | [local: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportSpecifierData}
   */
  data?: Optional<ImportSpecifierData>

  /**
   * Node type.
   */
  type: 'importSpecifier'
}

export type { ImportSpecifierData, ImportSpecifier as default }
