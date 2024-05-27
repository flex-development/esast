/**
 * @file Content - atomicExpression
 * @module esast/content/atomicExpression
 */

import type {
  ArrayExpression,
  ArrowFunctionExpression,
  ClassExpression,
  FunctionExpression,
  Identifier,
  LiteralMap,
  ModuleExpression,
  NewExpression,
  ObjectExpression,
  ParenthesizedExpression,
  Super,
  TemplateLiteral,
  This,
  TypeAssertionExpression
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
  classExpression: ClassExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  moduleExpression: ModuleExpression
  newExpression: NewExpression
  objectExpression: ObjectExpression
  parenthesizedExpression: ParenthesizedExpression
  super: Super
  templateLiteral: TemplateLiteral
  this: This
  typeAssertionExpression: TypeAssertionExpression
}

export type { AtomicExpression, AtomicExpressionMap }
