/**
 * @file Content - exportDeclaration
 * @module esast/content/exportDeclaration
 */

import type {
  ExportAllDeclaration,
  ExportDefaultDeclaration,
  ExportNamedDeclaration
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where an export declaration is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode ExportDeclarationMap}.
 * They will be added to this union automatically.
 */
type ExportDeclaration = ExportDeclarationMap[keyof ExportDeclarationMap]

/**
 * Registry of nodes that can occur where an {@linkcode ExportDeclaration} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface ExportDeclarationMap {
 *      customExportDeclaration: CustomExportDeclaration
 *    }
 *  }
 */
interface ExportDeclarationMap {
  exportAllDeclaration: ExportAllDeclaration
  exportDefaultDeclaration: ExportDefaultDeclaration
  exportNamedDeclaration: ExportNamedDeclaration
}

export type { ExportDeclaration, ExportDeclarationMap }
