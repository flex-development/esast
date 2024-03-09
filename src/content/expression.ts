/**
 * @file Content - expression
 * @module esast/content/expression
 */

import type {
  ArrayExpression,
  AssignmentExpression,
  AwaitExpression,
  BinaryExpression,
  CallExpression,
  ChainExpression,
  ConditionalExpression,
  FunctionExpression,
  Identifier,
  ImportExpression,
  LiteralMap,
  LogicalExpression,
  MemberExpression,
  ObjectExpression,
  SequenceExpression,
  TemplateLiteral,
  This,
  UnaryExpression,
  UpdateExpression,
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
 * @extends {LiteralMap}
 */
interface ExpressionMap extends LiteralMap {
  arrayExpression: ArrayExpression
  assignmentExpression: AssignmentExpression
  awaitExpression: AwaitExpression
  binaryExpression: BinaryExpression
  callExpression: CallExpression
  chainExpression: ChainExpression
  conditionalExpression: ConditionalExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  importExpression: ImportExpression
  logicalExpression: LogicalExpression
  memberExpression: MemberExpression
  objectExpression: ObjectExpression
  sequenceExpression: SequenceExpression
  templateLiteral: TemplateLiteral
  this: This
  unaryExpression: UnaryExpression
  updateExpression: UpdateExpression
  yieldExpression: YieldExpression
}

export type { Expression, ExpressionMap }
