/**
 * @file Content - pattern
 * @module esast/content/pattern
 */

import type {
  ArrayPattern,
  AssignmentPattern,
  Identifier,
  MemberExpression,
  ObjectPattern,
  RestElement,
  This
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a pattern is expected.
 *
 * To register custom esast nodes, augment {@linkcode PatternMap}. They will be
 * added to this union automatically.
 */
type Pattern = PatternMap[keyof PatternMap]

/**
 * Registry of nodes that can occur where a {@linkcode Pattern} is expected.
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
  assignmentPattern: AssignmentPattern
  identifier: Identifier
  memberExpression: MemberExpression
  objectPattern: ObjectPattern
  restElement: RestElement
  this: This
}

export type { Pattern, PatternMap }
