/**
 * @file Type Tests - expression
 * @module esast/content/tests/unit-d/expression
 */

import type * as TestSubject from '#content/expression'
import type NodeObject from '#tests/types/node-object'
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
    it('should extend AtomicExpressionMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<AtomicExpressionMap>()
    })

    it('should extend SubclauseExpressionMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<SubclauseExpressionMap>()
    })

    it('should extend SubscriptExpressionMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<SubscriptExpressionMap>()
    })

    it('should match NodeObject<ArithmeticExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<ArithmeticExpression>>()
    })

    it('should match NodeObject<AssignmentExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<AssignmentExpression>>()
    })

    it('should match NodeObject<AwaitExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<AwaitExpression>>()
    })

    it('should match NodeObject<BitwiseExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<BitwiseExpression>>()
    })

    it('should match NodeObject<ConditionalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<ConditionalExpression>>()
    })

    it('should match NodeObject<EqualityExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<EqualityExpression>>()
    })

    it('should match NodeObject<LogicalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<LogicalExpression>>()
    })

    it('should match NodeObject<RelationalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<RelationalExpression>>()
    })

    it('should match NodeObject<SequenceExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<SequenceExpression>>()
    })

    it('should match NodeObject<TypeAssertionExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<TypeAssertionExpression>>()
    })

    it('should match NodeObject<UnaryExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<UnaryExpression>>()
    })

    it('should match NodeObject<YieldExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toExtend<NodeObject<YieldExpression>>()
    })
  })
})
