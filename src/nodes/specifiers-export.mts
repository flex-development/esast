/**
 * @file Nodes - ExportSpecifiers
 * @module esast/nodes/ExportSpecifiers
 */

import type {
  Comment,
  Comments,
  Data,
  EmptyChildren,
  ExportSpecifier,
  Nothing,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with named exports.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportSpecifiersData extends Data {}

/**
 * A named export specifier list.
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
   * @see {@linkcode Nothing}
   */
  children: (Comment | ExportSpecifier | Nothing)[] | Comments | EmptyChildren

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportSpecifiersData}
   */
  data?: ExportSpecifiersData | undefined

  /**
   * Node type.
   */
  type: 'exportSpecifiers'
}

export type { ExportSpecifiers as default, ExportSpecifiersData }
