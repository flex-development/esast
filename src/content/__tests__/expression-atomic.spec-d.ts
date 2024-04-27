/**
 * @file Type Tests - atomicExpression
 * @module esast/content/tests/unit-d/atomicExpression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrayExpression,
  ArrowFunctionExpression,
  AwaitExpression,
  ClassExpression,
  FunctionExpression,
  Identifier,
  ImportExpression,
  ImportMeta,
  LiteralMap,
  ModuleExpression,
  NewExpression,
  ObjectExpression,
  ParenthesizedExpression,
  Super,
  TemplateLiteral,
  This,
  TypeAssertionExpression,
  UnaryExpression,
  YieldExpression
} from '@flex-development/esast'
import type * as TestSubject from '../expression-atomic'

describe('unit-d:content/atomicExpression', () => {
  describe('AtomicExpression', () => {
    it('should equal AtomicExpressionMap[keyof AtomicExpressionMap]', () => {
      // Arrange
      type M = TestSubject.AtomicExpressionMap
      type Expect = M[keyof M]

      // Expect
      expectTypeOf<TestSubject.AtomicExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('AtomicExpressionMap', () => {
    it('should extend LiteralMap', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<LiteralMap>()
    })

    it('should match NodeObject<ArrayExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrayExpression>>()
    })

    it('should match NodeObject<ArrowFunctionExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrowFunctionExpression>>()
    })

    it('should match NodeObject<AwaitExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<AwaitExpression>>()
    })

    it('should match NodeObject<ClassExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ClassExpression>>()
    })

    it('should match NodeObject<FunctionExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<FunctionExpression>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<ImportExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ImportExpression>>()
    })

    it('should match NodeObject<ImportMeta>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ImportMeta>>()
    })

    it('should match NodeObject<ModuleExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ModuleExpression>>()
    })

    it('should match NodeObject<NewExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<NewExpression>>()
    })

    it('should match NodeObject<ObjectExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ObjectExpression>>()
    })

    it('should match NodeObject<ParenthesizedExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ParenthesizedExpression>>()
    })

    it('should match NodeObject<Super>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<Super>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<This>>()
    })

    it('should match NodeObject<TypeAssertionExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<TypeAssertionExpression>>()
    })

    it('should match NodeObject<UnaryExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<UnaryExpression>>()
    })

    it('should match NodeObject<YieldExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<YieldExpression>>()
    })
  })
})
