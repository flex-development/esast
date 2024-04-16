/**
 * @file Content - typeExpression
 * @module esast/content/typeExpression
 */

import type {
  ArrayType,
  ConditionalType,
  ConstructorType,
  FunctionType,
  GenericType,
  Identifier,
  IndexedAccessType,
  InferType,
  IntersectionType,
  MappedType,
  ObjectLiteralType,
  ParenthesizedType,
  PrimitiveMap,
  Super,
  TemplateLiteral,
  This,
  TupleType,
  TypeKeyword,
  TypePredicate,
  UnaryTypeExpression,
  UnionType
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a type expression is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode TypeExpressionMap}. They
 * will be added to this union automatically.
 */
type TypeExpression = TypeExpressionMap[keyof TypeExpressionMap]

/**
 * Registry of nodes that can occur where a {@linkcode TypeExpression} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface TypeExpressionMap {
 *      customTypeExpression: CustomTypeExpression
 *    }
 *  }
 *
 * @extends {PrimitiveMap}
 */
interface TypeExpressionMap extends PrimitiveMap {
  arrayType: ArrayType
  conditionalType: ConditionalType
  constructorType: ConstructorType
  functionType: FunctionType
  genericType: GenericType
  identifier: Identifier
  indexedAccessType: IndexedAccessType
  inferType: InferType
  intersectionType: IntersectionType
  mappedType: MappedType
  objectLiteralType: ObjectLiteralType
  parenthesizedType: ParenthesizedType
  super: Super
  templateLiteral: TemplateLiteral
  this: This
  tupleType: TupleType
  typeKeyword: TypeKeyword
  typePredicate: TypePredicate
  unaryTypeExpression: UnaryTypeExpression
  unionType: UnionType
}

export type { TypeExpression, TypeExpressionMap }
