/**
 * @file Type Tests - expression
 * @module esast/content/tests/unit-d/expression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrayExpression,
  AssignmentExpression,
  AwaitExpression,
  FunctionExpression,
  Identifier,
  LiteralMap,
  MemberExpression,
  ObjectExpression,
  This,
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

    it('should match NodeObject<FunctionExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<FunctionExpression>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<ObjectExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<ObjectExpression>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<This>>()
    })

    it('should match NodeObject<YieldExpression>', () => {
      expectTypeOf<TestSubject.ExpressionMap>()
        .toMatchTypeOf<NodeObject<YieldExpression>>()
    })
  })
})
