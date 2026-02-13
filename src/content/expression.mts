/**
 * @file Content - expression
 * @module esast/content/expression
 */

import type {
  ArithmeticExpression,
  AssignmentExpression,
  AtomicExpressionMap,
  AwaitExpression,
  BitwiseExpression,
  ConditionalExpression,
  EqualityExpression,
  LogicalExpression,
  RelationalExpression,
  SequenceExpression,
  SubclauseExpressionMap,
  SubscriptExpressionMap,
  TypeAssertionExpression,
  UnaryExpression,
  YieldExpression
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
 * @see {@linkcode AtomicExpressionMap}
 * @see {@linkcode SubclauseExpressionMap}
 * @see {@linkcode SubscriptExpressionMap}
 *
 * @extends {AtomicExpressionMap}
 * @extends {SubclauseExpressionMap}
 * @extends {SubscriptExpressionMap}
 */
interface ExpressionMap
  extends AtomicExpressionMap, SubclauseExpressionMap, SubscriptExpressionMap {
  arithmeticExpression: ArithmeticExpression
  assignmentExpression: AssignmentExpression
  awaitExpression: AwaitExpression
  bitwiseExpression: BitwiseExpression
  conditionalExpression: ConditionalExpression
  equalityExpression: EqualityExpression
  logicalExpression: LogicalExpression
  relationalExpression: RelationalExpression
  sequenceExpression: SequenceExpression
  typeAssertionExpression: TypeAssertionExpression
  unaryExpression: UnaryExpression
  yieldExpression: YieldExpression
}

export type { Expression, ExpressionMap }
