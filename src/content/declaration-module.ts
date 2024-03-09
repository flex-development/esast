/**
 * @file Content - moduleDeclaration
 * @module esast/content/moduleDeclaration
 */

import type {
  ExportDeclarationMap,
  ImportDeclaration
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a module declaration is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode ModuleDeclarationMap}.
 * They will be added to this union automatically.
 */
type ModuleDeclaration = ModuleDeclarationMap[keyof ModuleDeclarationMap]

/**
 * Registry of nodes that can occur where a {@linkcode ModuleDeclaration} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface ModuleDeclarationMap {
 *      customModuleDeclaration: CustomModuleDeclaration
 *    }
 *  }
 */
interface ModuleDeclarationMap extends ExportDeclarationMap {
  importDeclaration: ImportDeclaration
}

export type { ModuleDeclaration, ModuleDeclarationMap }
