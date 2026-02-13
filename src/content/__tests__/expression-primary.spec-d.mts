/**
 * @file Type Tests - primaryExpression
 * @module esast/content/tests/unit-d/primaryExpression
 */

import type * as TestSubject from '#content/expression-primary'
import type NodeObject from '#tests/types/node-object'
import type {
  ArrayExpression,
  ClassExpression,
  FunctionExpression,
  Identifier,
  LiteralMap,
  ObjectExpression,
  ParenthesizedExpression,
  TemplateLiteral,
  This
} from '@flex-development/esast'

describe('unit-d:content/primaryExpression', () => {
  describe('PrimaryExpression', () => {
    it('should equal PrimaryExpressionMap[keyof PrimaryExpressionMap]', () => {
      // Arrange
      type M = TestSubject.PrimaryExpressionMap
      type Expect = M[keyof M]

      // Expect
      expectTypeOf<TestSubject.PrimaryExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('PrimaryExpressionMap', () => {
    it('should extend LiteralMap', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<LiteralMap>()
    })

    it('should match NodeObject<ArrayExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<ArrayExpression>>()
    })

    it('should match NodeObject<ClassExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<ClassExpression>>()
    })

    it('should match NodeObject<FunctionExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<FunctionExpression>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<Identifier>>()
    })

    it('should match NodeObject<ObjectExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<ObjectExpression>>()
    })

    it('should match NodeObject<ParenthesizedExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<ParenthesizedExpression>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toExtend<NodeObject<This>>()
    })
  })
})
