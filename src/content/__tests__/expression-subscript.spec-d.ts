/**
 * @file Type Tests - subscriptExpression
 * @module esast/content/tests/unit-d/subscriptExpression
 */

import type { NodeObject } from '#tests/types'
import type {
  CallExpression,
  ImportExpression,
  ImportMeta,
  MemberExpression,
  NonNullExpression,
  TaggedTemplateExpression,
  UpdateExpression
} from '@flex-development/esast'
import type * as TestSubject from '../expression-subscript'

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
        .toMatchTypeOf<NodeObject<CallExpression>>()
    })

    it('should match NodeObject<ImportExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<ImportExpression>>()
    })

    it('should match NodeObject<ImportMeta>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<ImportMeta>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<NonNullExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<NonNullExpression>>()
    })

    it('should match NodeObject<TaggedTemplateExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<TaggedTemplateExpression>>()
    })

    it('should match NodeObject<UpdateExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<UpdateExpression>>()
    })
  })
})
