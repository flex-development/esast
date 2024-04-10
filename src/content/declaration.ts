/**
 * @file Content - declaration
 * @module esast/content/declaration
 */

import type {
  ClassDeclaration,
  FunctionDeclaration,
  ModuleDeclaration,
  TypeDeclarationMap,
  VariableDeclaration
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a concrete (non-ambient)
 * declaration is expected.
 *
 * To register custom esast nodes, augment {@linkcode DeclarationMap}. They will
 * be added to this union automatically.
 */
type Declaration = DeclarationMap[keyof DeclarationMap]

/**
 * Registry of nodes that can occur where a {@linkcode Declaration} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface DeclarationMap {
 *      customDeclaration: CustomDeclaration
 *    }
 *  }
 *
 * @extends {TypeDeclarationMap}
 */
interface DeclarationMap extends TypeDeclarationMap {
  classDeclaration: ClassDeclaration
  functionDeclaration: FunctionDeclaration
  moduleDeclaration: ModuleDeclaration
  variableDeclaration: VariableDeclaration
}

export type { Declaration, DeclarationMap }
