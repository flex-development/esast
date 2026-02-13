/**
 * @file Type Tests - subscriptExpression
 * @module esast/content/tests/unit-d/subscriptExpression
 */

import type * as TestSubject from '#content/expression-subscript'
import type NodeObject from '#tests/types/node-object'
import type {
  CallExpression,
  ImportExpression,
  ImportMeta,
  MemberExpression,
  NonNullExpression,
  TaggedTemplateExpression,
  UpdateExpression
} from '@flex-development/esast'

describe('unit-d:content/subscriptExpression', () => {
  describe('SubscriptExpression', () => {
    it('should equal SubscriptExpressionMap[keyof SubscriptExpressionMap]', () => {
      // Arrange
      type M = TestSubject.SubscriptExpressionMap
      type Expect = M[keyof M]

      // Expect
      expectTypeOf<TestSubject.SubscriptExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('SubscriptExpressionMap', () => {
    it('should match NodeObject<CallExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<CallExpression>>()
    })

    it('should match NodeObject<ImportExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<ImportExpression>>()
    })

    it('should match NodeObject<ImportMeta>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<ImportMeta>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<NonNullExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<NonNullExpression>>()
    })

    it('should match NodeObject<TaggedTemplateExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<TaggedTemplateExpression>>()
    })

    it('should match NodeObject<UpdateExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toExtend<NodeObject<UpdateExpression>>()
    })
  })
})
