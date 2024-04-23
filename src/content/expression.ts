/**
 * @file Content - expression
 * @module esast/content/expression
 */

import type {
  ArithmeticExpression,
  ArrayExpression,
  ArrowFunctionExpression,
  AssignmentExpression,
  AwaitExpression,
  BitwiseExpression,
  CallExpression,
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
  ModuleExpression,
  NewExpression,
  NonNullExpression,
  ObjectExpression,
  ParenthesizedExpression,
  RelationalExpression,
  SatisfiesExpression,
  SequenceExpression,
  TaggedTemplateExpression,
  TemplateLiteral,
  This,
  TypeAssertion,
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
  arrowFunctionExpression: ArrowFunctionExpression
  assignmentExpression: AssignmentExpression
  awaitExpression: AwaitExpression
  bitwiseExpression: BitwiseExpression
  callExpression: CallExpression
  classExpression: ClassExpression
  conditionalExpression: ConditionalExpression
  equalityExpression: EqualityExpression
  functionExpression: FunctionExpression
  identifier: Identifier
  importExpression: ImportExpression
  importMeta: ImportMeta
  logicalExpression: LogicalExpression
  memberExpression: MemberExpression
  moduleExpression: ModuleExpression
  newExpression: NewExpression
  nonNullExpression: NonNullExpression
  objectExpression: ObjectExpression
  parenthesizedExpression: ParenthesizedExpression
  relationalExpression: RelationalExpression
  satisfiesExpression: SatisfiesExpression
  sequenceExpression: SequenceExpression
  taggedTemplateExpression: TaggedTemplateExpression
  templateLiteral: TemplateLiteral
  this: This
  typeAssertion: TypeAssertion
  unaryExpression: UnaryExpression
  updateExpression: UpdateExpression
  yieldExpression: YieldExpression
}

export type { Expression, ExpressionMap }
