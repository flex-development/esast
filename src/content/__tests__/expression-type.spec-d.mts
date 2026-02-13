/**
 * @file Type Tests - typeExpression
 * @module esast/content/tests/unit-d/typeExpression
 */

import type * as TestSubject from '#content/expression-type'
import type NodeObject from '#tests/types/node-object'
import type {
  ArrayType,
  AssertionPredicate,
  ConditionalType,
  ConstructorType,
  FunctionType,
  GenericType,
  Identifier,
  IndexedAccessType,
  InferType,
  IntersectionType,
  LiteralMap,
  MappedType,
  ObjectLiteralType,
  ParenthesizedType,
  Super,
  TemplateLiteral,
  This,
  TupleType,
  TypeKeyword,
  TypePredicate,
  UnaryTypeExpression,
  UnionType
} from '@flex-development/esast'

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
    it('should extend LiteralMap', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<LiteralMap>()
    })

    it('should match NodeObject<ArrayType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<ArrayType>>()
    })

    it('should match NodeObject<AssertionPredicate>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<AssertionPredicate>>()
    })

    it('should match NodeObject<ConditionalType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<ConditionalType>>()
    })

    it('should match NodeObject<ConstructorType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<ConstructorType>>()
    })

    it('should match NodeObject<FunctionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<FunctionType>>()
    })

    it('should match NodeObject<GenericType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<GenericType>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<Identifier>>()
    })

    it('should match NodeObject<IndexedAccessType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<IndexedAccessType>>()
    })

    it('should match NodeObject<InferType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<InferType>>()
    })

    it('should match NodeObject<IntersectionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<IntersectionType>>()
    })

    it('should match NodeObject<MappedType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<MappedType>>()
    })

    it('should match NodeObject<ObjectLiteralType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<ObjectLiteralType>>()
    })

    it('should match NodeObject<ParenthesizedType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<ParenthesizedType>>()
    })

    it('should match NodeObject<Super>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<Super>>()
    })

    it('should match NodeObject<TemplateLiteral>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<TemplateLiteral>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<This>>()
    })

    it('should match NodeObject<TupleType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<TupleType>>()
    })

    it('should match NodeObject<TypeKeyword>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<TypeKeyword>>()
    })

    it('should match NodeObject<TypePredicate>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<TypePredicate>>()
    })

    it('should match NodeObject<UnaryTypeExpression>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<UnaryTypeExpression>>()
    })

    it('should match NodeObject<UnionType>', () => {
      expectTypeOf<TestSubject.TypeExpressionMap>()
        .toExtend<NodeObject<UnionType>>()
    })
  })
})
