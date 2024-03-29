/**
 * @file Type Tests - expression
 * @module esast/content/tests/unit-d/expression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrayExpression,
  AssignmentExpression,
  AwaitExpression,
  BinaryExpression,
  CallExpression,
  ChainExpression,
  ClassExpression,
  ConditionalExpression,
  FunctionExpression,
  Identifier,
  ImportExpression,
  LiteralMap,
  LogicalExpression,
  MemberExpression,
  MetaProperty,
  ObjectExpression,
  SequenceExpression,
  TaggedTemplateExpression,
  TemplateLiteral,
  This,
  UnaryExpression,
  UpdateExpression,
  YieldExpression
} from '@flex-development/esast'
import type * as TestSubject from '../expression'

describe('unit-d:content/expression', () => {
  describe('Expression', () => {
    it('should equal ExpressionMap[keyof ExpressionMap]', () => {
      // Arrange
      type Expect = TestSubject.ExpressionMap[keyof TestSubject.ExpressionMap]

      // Expect
      expectTypeOf<TestSubject.Expression>().toEqualTypeOf<Expect>
    })
  })

  describe('ExpressionMap', () => {
    it('should extend LiteralMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>().toMatchTypeOf<LiteralMap>()
    })

    it('should match NodeObject<ArrayExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrayExpression>>()
    })

    it('should match NodeObject<AssignmentExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<AssignmentExpression>>()
    })

    it('should match NodeObject<AwaitExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<AwaitExpression>>()
    })

    it('should match NodeObject<BinaryExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<BinaryExpression>>()
    })

    it('should match NodeObject<CallExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<CallExpression>>()
    })

    it('should match NodeObject<ChainExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ChainExpression>>()
    })

    it('should match NodeObject<ClassExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ClassExpression>>()
    })

    it('should match NodeObject<ConditionalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ConditionalExpression>>()
    })

    it('should match NodeObject<FunctionExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<FunctionExpression>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<ImportExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ImportExpression>>()
    })

    it('should match NodeObject<LogicalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<LogicalExpression>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<MetaProperty>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<MetaProperty>>()
    })

    it('should match NodeObject<ObjectExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ObjectExpression>>()
    })

    it('should match NodeObject<SequenceExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<SequenceExpression>>()
    })

    it('should match NodeObject<TaggedTemplateExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<TaggedTemplateExpression>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<This>>()
    })

    it('should match NodeObject<UnaryExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<UnaryExpression>>()
    })

    it('should match NodeObject<UpdateExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<UpdateExpression>>()
    })

    it('should match NodeObject<YieldExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<YieldExpression>>()
    })
  })
})
