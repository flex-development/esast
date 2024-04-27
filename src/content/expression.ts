/**
 * @file Content - expression
 * @module esast/content/expression
 */

import type {
  ArithmeticExpression,
  AssignmentExpression,
  AtomicExpressionMap,
  BitwiseExpression,
  ConditionalExpression,
  EqualityExpression,
  LogicalExpression,
  RelationalExpression,
  SequenceExpression,
  SubscriptExpressionMap
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
 * @extends {AtomicExpressionMap}
 * @extends {SubscriptExpressionMap}
 */
interface ExpressionMap extends AtomicExpressionMap, SubscriptExpressionMap {
  arithmeticExpression: ArithmeticExpression
  assignmentExpression: AssignmentExpression
  bitwiseExpression: BitwiseExpression
  conditionalExpression: ConditionalExpression
  equalityExpression: EqualityExpression
  logicalExpression: LogicalExpression
  relationalExpression: RelationalExpression
  sequenceExpression: SequenceExpression
}

export type { Expression, ExpressionMap }
