/**
 * @file Content - atomicExpression
 * @module esast/content/atomicExpression
 */

import type {
  ArrayExpression,
  ArrowFunctionExpression,
  AwaitExpression,
  ClassExpression,
  FunctionExpression,
  Identifier,
  ImportExpression,
  ImportMeta,
  LiteralMap,
  ModuleExpression,
  NewExpression,
  ObjectExpression,
  ParenthesizedExpression,
  Super,
  TemplateLiteral,
  This,
  TypeAssertionExpression,
  UnaryExpression,
  YieldExpression
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where an atomic expression is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode AtomicExpressionMap}. They
 * will be added to this union automatically.
 */
type AtomicExpression = AtomicExpressionMap[keyof AtomicExpressionMap]

/**
 * Registry of nodes that can occur where an {@linkcode AtomicExpression} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface AtomicExpressionMap {
 *      customAtomicExpression: CustomAtomicExpression
 *    }
 *  }
 *
 * @extends {LiteralMap}
 */
interface AtomicExpressionMap extends LiteralMap {
  arrayExpression: ArrayExpression
  arrowFunctionExpression: ArrowFunctionExpression
  awaitExpression: AwaitExpression
  classExpression: ClassExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  importExpression: ImportExpression
  importMeta: ImportMeta
  moduleExpression: ModuleExpression
  newExpression: NewExpression
  objectExpression: ObjectExpression
  parenthesizedExpression: ParenthesizedExpression
  super: Super
  templateLiteral: TemplateLiteral
  this: This
  typeAssertionExpression: TypeAssertionExpression
  unaryExpression: UnaryExpression
  yieldExpression: YieldExpression
}

export type { AtomicExpression, AtomicExpressionMap }
