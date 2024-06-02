/**
 * @file Type Tests - expression
 * @module esast/content/tests/unit-d/expression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArithmeticExpression,
  AsExpression,
  AssignmentExpression,
  AtomicExpressionMap,
  AwaitExpression,
  BitwiseExpression,
  ConditionalExpression,
  EqualityExpression,
  LogicalExpression,
  RelationalExpression,
  SatisfiesExpression,
  SequenceExpression,
  SubscriptExpressionMap,
  TypeAssertionExpression,
  UnaryExpression,
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
    it('should extend AtomicExpressionMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<AtomicExpressionMap>()
    })

    it('should extend SubscriptExpressionMap', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<SubscriptExpressionMap>()
    })

    it('should match NodeObject<ArithmeticExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ArithmeticExpression>>()
    })

    it('should match NodeObject<AsExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<AsExpression>>()
    })

    it('should match NodeObject<AssignmentExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<AssignmentExpression>>()
    })

    it('should match NodeObject<AwaitExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<AwaitExpression>>()
    })

    it('should match NodeObject<BitwiseExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<BitwiseExpression>>()
    })

    it('should match NodeObject<ConditionalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ConditionalExpression>>()
    })

    it('should match NodeObject<EqualityExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<EqualityExpression>>()
    })

    it('should match NodeObject<LogicalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<LogicalExpression>>()
    })

    it('should match NodeObject<RelationalExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<RelationalExpression>>()
    })

    it('should match NodeObject<SatisfiesExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<SatisfiesExpression>>()
    })

    it('should match NodeObject<SequenceExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<SequenceExpression>>()
    })

    it('should match NodeObject<TypeAssertionExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<TypeAssertionExpression>>()
    })

    it('should match NodeObject<UnaryExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<UnaryExpression>>()
    })

    it('should match NodeObject<YieldExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<YieldExpression>>()
    })
  })
})
