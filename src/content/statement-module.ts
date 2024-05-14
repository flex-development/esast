/**
 * @file Content - moduleStatement
 * @module esast/content/moduleStatement
 */

import type {
  ExportDeclaration,
  ImportDeclaration
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a module statement is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode ModuleStatementMap}. They
 * will be added to this union automatically.
 */
type ModuleStatement = ModuleStatementMap[keyof ModuleStatementMap]

/**
 * Registry of nodes that can occur where a {@linkcode ModuleStatement} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface ModuleStatementMap {
 *      customModuleStatement: CustomModuleStatement
 *    }
 *  }
 */
interface ModuleStatementMap {
  exportDeclaration: ExportDeclaration
  importDeclaration: ImportDeclaration
}

export type { ModuleStatement, ModuleStatementMap }
