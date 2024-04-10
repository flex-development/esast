/**
 * @file Content - typeDeclaration
 * @module esast/content/typeDeclaration
 */

import type {
  EnumDeclaration,
  FunctionSignature,
  InterfaceDeclaration,
  ModuleDeclaration,
  NamespaceDeclaration,
  TypeAliasDeclaration
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a type declaration is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode TypeDeclarationMap}. They
 * will be added to this union automatically.
 */
type TypeDeclaration = TypeDeclarationMap[keyof TypeDeclarationMap]

/**
 * Registry of nodes that can occur where a {@linkcode TypeDeclaration} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface TypeDeclarationMap {
 *      customTypeDeclaration: CustomTypeDeclaration
 *    }
 *  }
 */
interface TypeDeclarationMap {
  enumDeclaration: EnumDeclaration
  functionSignature: FunctionSignature
  interfaceDeclaration: InterfaceDeclaration
  moduleDeclaration: ModuleDeclaration
  namespaceDeclaration: NamespaceDeclaration
  typeAliasDeclaration: TypeAliasDeclaration
}

export type { TypeDeclaration, TypeDeclarationMap }
