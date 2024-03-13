/**
 * @file Content - node
 * @module esast/content/node
 */

import type {
  CatchClause,
  ClassBody,
  ClassHeritage,
  ExportSpecifier,
  ExportSpecifiers,
  HeritageMap,
  ImportSpecifier,
  ImportSpecifiers,
  MethodDefinition,
  Nothing,
  ParameterList,
  PatternMap,
  Property,
  PropertyDefinition,
  Root,
  RootMap,
  SpreadElement,
  StatementMap,
  Super,
  SwitchCase,
  TemplateElement,
  VariableDeclarator
} from '@flex-development/esast'

/**
 * Union of registered esast nodes.
 *
 * To register custom esast nodes, augment one of the following maps:
 *
 * - {@linkcode HeritageMap}
 * - {@linkcode NodeMap}
 * - {@linkcode PatternMap}
 * - {@linkcode StatementMap}
 *
 * They will be added to this union automatically.
 */
type EsastNode = NodeMap[keyof NodeMap]

/**
 * Registry of esast nodes.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface NodeMap {
 *      customNode: CustomNode
 *    }
 *  }
 *
 * @extends {HeritageMap}
 * @extends {PatternMap}
 * @extends {RootMap}
 * @extends {StatementMap}
 */
interface NodeMap extends HeritageMap, PatternMap, RootMap, StatementMap {
  catchClause: CatchClause
  classBody: ClassBody
  classHeritage: ClassHeritage
  exportSpecifier: ExportSpecifier
  exportSpecifiers: ExportSpecifiers
  importSpecifier: ImportSpecifier
  importSpecifiers: ImportSpecifiers
  methodDefinition: MethodDefinition
  nothing: Nothing
  parameterList: ParameterList
  property: Property
  propertyDefinition: PropertyDefinition
  root: Root
  spreadElement: SpreadElement
  super: Super
  switchCase: SwitchCase
  templateElement: TemplateElement
  variableDeclarator: VariableDeclarator
}

export type { EsastNode, NodeMap }
