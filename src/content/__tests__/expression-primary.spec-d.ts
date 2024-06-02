/**
 * @file Type Tests - primaryExpression
 * @module esast/content/tests/unit-d/primaryExpression
 */

import type { NodeObject } from '#tests/types'
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
import type * as TestSubject from '../expression-primary'

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
        .toMatchTypeOf<LiteralMap>()
    })

    it('should match NodeObject<ArrayExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrayExpression>>()
    })

    it('should match NodeObject<ClassExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<ClassExpression>>()
    })

    it('should match NodeObject<FunctionExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<FunctionExpression>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<ObjectExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<ObjectExpression>>()
    })

    it('should match NodeObject<ParenthesizedExpression>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<ParenthesizedExpression>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.PrimaryExpressionMap>()
        .toMatchTypeOf<NodeObject<This>>()
    })
  })
})
