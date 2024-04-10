/**
 * @file Content - root
 * @module esast/content/root
 */

import type {
  AmbientDeclaration,
  Comment,
  Decorator,
  Directive,
  ModuleDeclaration,
  ModuleReferenceMap,
  StatementMap
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a root child node is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode RootMap}. They will be
 * added to this union automatically.
 */
type RootChild = RootMap[keyof RootMap]

/**
 * Registry of nodes that can occur where a {@linkcode RootChild} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface RootMap {
 *      customNode: CustomNode
 *    }
 *  }
 *
 * @extends {ModuleReferenceMap}
 * @extends {StatementMap}
 */
interface RootMap extends ModuleReferenceMap, StatementMap {
  ambientDeclaration: AmbientDeclaration
  comment: Comment
  decorator: Decorator
  directive: Directive
  moduleDeclaration: ModuleDeclaration
}

export type { RootChild, RootMap }
