/**
 * @file Nodes - ExportSpecifier
 * @module esast/nodes/ExportSpecifier
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with `export` specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportSpecifierData extends Data {
  /**
   * Type-only export?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: Nilable<boolean>
}

/**
 * An `export` specifier.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportSpecifier extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      local: Identifier | StringLiteral,
      ...comments: InternalComments,
      exported: Identifier | StringLiteral
    ]
    | [...comments: Comments, exported: Identifier | StringLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportSpecifierData}
   */
  data?: Optional<ExportSpecifierData>

  /**
   * Node type.
   */
  type: 'exportSpecifier'
}

export type { ExportSpecifierData, ExportSpecifier as default }
