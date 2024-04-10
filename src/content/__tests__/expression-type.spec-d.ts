/**
 * @file Type Tests - typeExpression
 * @module esast/content/tests/unit-d/typeExpression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrayType,
  ConditionalType,
  FunctionType,
  GenericType,
  Identifier,
  IndexedAccessType,
  IntersectionType,
  MappedType,
  ObjectLiteralType,
  ParenthesizedType,
  PrimitiveMap,
  Super,
  TemplateLiteral,
  This,
  TupleType,
  TypeKeyword,
  TypePredicate,
  UnaryTypeExpression,
  UnionType
} from '@flex-development/esast'
import type * as TestSubject from '../expression-type'

describe('unit-d:content/typeExpression', () => {
  describe('TypeExpression', () => {
    it('should equal TypeExpressionMap[keyof TypeExpressionMap]', () => {
      // Arrange
      type K = keyof TestSubject.TypeExpressionMap
      type Expect = TestSubject.TypeExpressionMap[K]

      // Expect
      expectTypeOf<TestSubject.TypeExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('TypeExpressionMap', () => {
    it('should extend PrimitiveMap', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<PrimitiveMap>()
    })

    it('should match NodeObject<ArrayType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrayType>>()
    })

    it('should match NodeObject<ConditionalType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ConditionalType>>()
    })

    it('should match NodeObject<FunctionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<FunctionType>>()
    })

    it('should match NodeObject<GenericType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<GenericType>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<IndexedAccessType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<IndexedAccessType>>()
    })

    it('should match NodeObject<IntersectionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<IntersectionType>>()
    })

    it('should match NodeObject<MappedType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<MappedType>>()
    })

    it('should match NodeObject<ObjectLiteralType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ObjectLiteralType>>()
    })

    it('should match NodeObject<ParenthesizedType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<ParenthesizedType>>()
    })

    it('should match NodeObject<Super>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<Super>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<This>>()
    })

    it('should match NodeObject<TupleType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TupleType>>()
    })

    it('should match NodeObject<TypeKeyword>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TypeKeyword>>()
    })

    it('should match NodeObject<TypePredicate>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<TypePredicate>>()
    })

    it('should match NodeObject<UnaryTypeExpression>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<UnaryTypeExpression>>()
    })

    it('should match NodeObject<UnionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toMatchTypeOf<NodeObject<UnionType>>()
    })
  })
})
