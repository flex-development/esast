/**
 * @file Content - pattern
 * @module esast/content/pattern
 */

import type {
  ArrayPattern,
  Identifier,
  MemberExpression,
  RestElement
} from '@flex-development/esast'

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
 *  declare module '@flex-development/esast' {
 *    interface PatternMap {
 *      customPattern: CustomPattern
 *    }
 *  }
 */
interface PatternMap {
  arrayPattern: ArrayPattern
  identifier: Identifier
  memberExpression: MemberExpression
  restElement: RestElement
}

export type { Pattern, PatternMap }
