/**
 * @file Content - primaryExpression
 * @module esast/content/primaryExpression
 */

import type {
  ArrayExpression,
  ClassExpression,
  FunctionExpression,
  Identifier,
  LiteralMap,
  ObjectExpression,
  ParenthesizedExpression,
  TemplateLiteral,
  This
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a primary expression is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode PrimaryExpressionMap}.
 * They will be added to this union automatically.
 */
type PrimaryExpression = PrimaryExpressionMap[keyof PrimaryExpressionMap]

/**
 * Registry of nodes that can occur where an {@linkcode PrimaryExpression} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface PrimaryExpressionMap {
 *      customPrimaryExpression: CustomPrimaryExpression
 *    }
 *  }
 *
 * @see {@linkcode LiteralMap}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#primary_expressions
 *
 * @extends {LiteralMap}
 */
interface PrimaryExpressionMap extends LiteralMap {
  arrayExpression: ArrayExpression
  classExpression: ClassExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  objectExpression: ObjectExpression
  parenthesizedExpression: ParenthesizedExpression
  templateLiteral: TemplateLiteral
  this: This
}

export type { PrimaryExpression, PrimaryExpressionMap }
