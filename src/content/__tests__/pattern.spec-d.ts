/**
 * @file Type Tests - pattern
 * @module esast/content/tests/unit-d/pattern
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrayPattern,
  Identifier,
  MemberExpression,
  RestElement
} from '@flex-development/esast'
import type * as TestSubject from '../pattern'

describe('unit-d:content/pattern', () => {
  describe('Pattern', () => {
    it('should equal PatternMap[keyof PatternMap]', () => {
      expectTypeOf<TestSubject.Pattern>()
        .toEqualTypeOf<TestSubject.PatternMap[keyof TestSubject.PatternMap]>
    })
  })

  describe('PatternMap', () => {
    it('should match NodeObject<ArrayPattern>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toMatchTypeOf<NodeObject<ArrayPattern>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toMatchTypeOf<NodeObject<Identifier>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toMatchTypeOf<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<RestElement>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toMatchTypeOf<NodeObject<RestElement>>()
    })
  })
})
