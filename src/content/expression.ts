/**
 * @file Content - expression
 * @module esast/content/expression
 */

import type {
  ArithmeticExpression,
  ArrayExpression,
  AssignmentExpression,
  AwaitExpression,
  BitwiseExpression,
  CallExpression,
  ChainExpression,
  ClassExpression,
  ConditionalExpression,
  EqualityExpression,
  FunctionExpression,
  Identifier,
  ImportExpression,
  ImportMeta,
  LiteralMap,
  LogicalExpression,
  MemberExpression,
  ObjectExpression,
  ParenthesizedExpression,
  RelationalExpression,
  SequenceExpression,
  TaggedTemplateExpression,
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
  arithmeticExpression: ArithmeticExpression
  arrayExpression: ArrayExpression
  assignmentExpression: AssignmentExpression
  awaitExpression: AwaitExpression
  bitwiseExpression: BitwiseExpression
  callExpression: CallExpression
  chainExpression: ChainExpression
  classExpression: ClassExpression
  conditionalExpression: ConditionalExpression
  equalityExpression: EqualityExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  importExpression: ImportExpression
  importMeta: ImportMeta
  logicalExpression: LogicalExpression
  memberExpression: MemberExpression
  objectExpression: ObjectExpression
  parenthesizedExpression: ParenthesizedExpression
  relationalExpression: RelationalExpression
  sequenceExpression: SequenceExpression
  taggedTemplateExpression: TaggedTemplateExpression
  templateLiteral: TemplateLiteral
  this: This
  unaryExpression: UnaryExpression
  updateExpression: UpdateExpression
  yieldExpression: YieldExpression
}

export type { Expression, ExpressionMap }
