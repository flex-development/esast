/**
 * @file Content - moduleReference
 * @module esast/content/moduleReference
 */

import type {
  ExportDeclaration,
  ImportDeclaration
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a module reference is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode ModuleReferenceMap}. They
 * will be added to this union automatically.
 */
type ModuleReference = ModuleReferenceMap[keyof ModuleReferenceMap]

/**
 * Registry of nodes that can occur where a {@linkcode ModuleReference} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface ModuleReferenceMap {
 *      customModuleReference: CustomModuleReference
 *    }
 *  }
 */
interface ModuleReferenceMap {
  exportDeclaration: ExportDeclaration
  importDeclaration: ImportDeclaration
}

export type { ModuleReference, ModuleReferenceMap }
