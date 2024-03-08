/**
 * @file Content - expression
 * @module esast/content/expression
 */

import type {
  ArrayExpression,
  FunctionExpression,
  Identifier,
  LiteralMap,
  This
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where an expression is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode ExpressionMap}. They will
 * be added to this union automatically.
 */
type Expression = ExpressionMap[keyof ExpressionMap]

/**
 * Registry of nodes that can occur where an {@linkcode Expression} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface ExpressionMap {
 *      customExpression: CustomExpression
 *    }
 *  }
 *
 * @extends {LiteralMap}
 */
interface ExpressionMap extends LiteralMap {
  arrayExpression: ArrayExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  this: This
}

export type { Expression, ExpressionMap }
