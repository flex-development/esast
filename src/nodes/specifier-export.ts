/**
 * @file Nodes - ExportSpecifier
 * @module esast/nodes/ExportSpecifier
 */

import type {
  Comment,
  Comments,
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `export` specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportSpecifierData extends Data {}

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
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      local: Identifier | StringLiteral,
      ...comments: Comments,
      exported: Identifier | StringLiteral
    ]
    | [exported: Identifier | StringLiteral]

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
