/**
 * @file Type Tests - subscriptExpression
 * @module esast/content/tests/unit-d/subscriptExpression
 */

import type { NodeObject } from '#tests/types'
import type {
  AsExpression,
  CallExpression,
  MemberExpression,
  NonNullExpression,
  SatisfiesExpression,
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
    it('should match NodeObject<AsExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<AsExpression>>()
    })

    it('should match NodeObject<CallExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<CallExpression>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<NonNullExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<NonNullExpression>>()
    })

    it('should match NodeObject<SatisfiesExpression>', () => {
      expectTypeOf<TestSubject.SubscriptExpressionMap>()
        .toMatchTypeOf<NodeObject<SatisfiesExpression>>()
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
