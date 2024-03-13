/**
 * @file Nodes - ExportSpecifiers
 * @module esast/nodes/ExportSpecifiers
 */

import type {
  Comment,
  Data,
  ExportSpecifier,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with export specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportSpecifiersData extends Data {}

/**
 * A collection of export specifiers.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportSpecifiers extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode ExportSpecifier}
   */
  children: (Comment | ExportSpecifier)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportSpecifiersData}
   */
  data?: Optional<ExportSpecifiersData>

  /**
   * Node type.
   */
  type: 'exportSpecifiers'
}

export type { ExportSpecifiersData, ExportSpecifiers as default }
