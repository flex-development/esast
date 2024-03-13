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

export type { NodeMap }
