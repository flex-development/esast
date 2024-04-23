/**
 * @file Content - node
 * @module esast/content/node
 */

import type {
  ArgumentList,
  CallSignature,
  CatchClause,
  ClassBody,
  ConstructSignature,
  EnumBody,
  EnumMember,
  ExportSpecifier,
  ExportSpecifiers,
  ExpressionMap,
  ExtendsClause,
  FinallyBlock,
  ImplementsClause,
  ImportAssertion,
  ImportAttribute,
  ImportAttributeClause,
  ImportSpecifier,
  ImportSpecifiers,
  IndexSignature,
  InterfaceBody,
  MappedSignature,
  MethodDefinition,
  MethodSignature,
  Modifier,
  ModifierList,
  ModuleBody,
  Nothing,
  Parameter,
  ParameterList,
  PatternMap,
  Property,
  PropertyDefinition,
  PropertySignature,
  RestElement,
  RestType,
  Root,
  RootMap,
  SatisfiesClause,
  SpreadElement,
  StaticBlock,
  Super,
  SwitchCase,
  TemplateElement,
  TupleElement,
  TypeAnnotation,
  TypeArgument,
  TypeArgumentList,
  TypeExpressionMap,
  TypeParameter,
  TypeParameterList,
  VariableDeclarator
} from '@flex-development/esast'

/**
 * Union of registered esast nodes.
 *
 * To register custom esast nodes, augment one of the following maps:
 *
 * - {@linkcode ExpressionMap}
 * - {@linkcode NodeMap}
 * - {@linkcode PatternMap}
 * - {@linkcode RootMap}
 * - {@linkcode TypeExpressionMap}
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
 * @extends {ExpressionMap}
 * @extends {PatternMap}
 * @extends {RootMap}
 * @extends {TypeExpressionMap}
 */
interface NodeMap
  extends ExpressionMap, PatternMap, RootMap, TypeExpressionMap {
  argumentList: ArgumentList
  callSignature: CallSignature
  catchClause: CatchClause
  classBody: ClassBody
  constructSignature: ConstructSignature
  enumBody: EnumBody
  enumMember: EnumMember
  exportSpecifier: ExportSpecifier
  exportSpecifiers: ExportSpecifiers
  extendsClause: ExtendsClause
  finallyBlock: FinallyBlock
  implementsClause: ImplementsClause
  importAssertion: ImportAssertion
  importAttribute: ImportAttribute
  importAttributeClause: ImportAttributeClause
  importSpecifier: ImportSpecifier
  importSpecifiers: ImportSpecifiers
  indexSignature: IndexSignature
  interfaceBody: InterfaceBody
  mappedSignature: MappedSignature
  methodDefinition: MethodDefinition
  methodSignature: MethodSignature
  modifier: Modifier
  modifierList: ModifierList
  moduleBody: ModuleBody
  nothing: Nothing
  parameter: Parameter
  parameterList: ParameterList
  property: Property
  propertyDefinition: PropertyDefinition
  propertySignature: PropertySignature
  restElement: RestElement
  restType: RestType
  root: Root
  satisfiesClause: SatisfiesClause
  spreadElement: SpreadElement
  staticBlock: StaticBlock
  super: Super
  switchCase: SwitchCase
  templateElement: TemplateElement
  tupleElement: TupleElement
  typeAnnotation: TypeAnnotation
  typeArgument: TypeArgument
  typeArgumentList: TypeArgumentList
  typeParameter: TypeParameter
  typeParameterList: TypeParameterList
  variableDeclarator: VariableDeclarator
}

export type { EsastNode, NodeMap }
