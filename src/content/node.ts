/**
 * @file Content - node
 * @module esast/content/node
 */

import * as docast from '@flex-development/docast'
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
  Parent,
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
 * To register custom esast nodes, augment {@linkcode NodeMap}. They will be
 * added to this union automatically.
 */
type AnyNode = NodeMap[keyof NodeMap]

/**
 * Union of registered esast parent nodes.
 *
 * To register custom esast parent nodes, augment {@linkcode NodeMap}. They will
 * be added to this union automatically.
 */
type AnyParent = Extract<AnyNode, Parent>

/**
 * Union of registered esast child nodes.
 *
 * To register custom esast child nodes, augment {@linkcode NodeMap}. They will
 * be added to this union automatically.
 */
type Child = Exclude<AnyNode, { type: 'root' }>

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
 * @extends {docast.BlockTagContentMap}
 * @extends {docast.DescriptionContentMap}
 * @extends {docast.FlowContentMap}
 */
interface NodeMap
  extends HeritageMap, PatternMap, RootMap, StatementMap,
    docast.BlockTagContentMap, docast.DescriptionContentMap,
    docast.FlowContentMap {
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

export type { AnyNode, AnyParent, Child, NodeMap }
