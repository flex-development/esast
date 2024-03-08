/**
 * @file Content - pattern
 * @module esast/content/pattern
 */

import type { Identifier, RestElement } from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a pattern is expected.
 *
 * To register custom esast nodes, augment {@linkcode PatternMap}. They will be
 * added to this union automatically.
 */
type Pattern = PatternMap[keyof PatternMap]

/**
 * Registry of nodes that can occur where an {@linkcode Pattern} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface PatternMap {
 *      customPattern: CustomPattern
 *    }
 *  }
 */
interface PatternMap {
  identifier: Identifier
  restElement: RestElement
}

export type { Pattern, PatternMap }
