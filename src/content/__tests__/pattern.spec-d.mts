/**
 * @file Type Tests - pattern
 * @module esast/content/tests/unit-d/pattern
 */

import type * as TestSubject from '#content/pattern'
import type NodeObject from '#tests/types/node-object'
import type {
  ArrayPattern,
  AssignmentPattern,
  Identifier,
  MemberExpression,
  ObjectPattern,
  RestElement,
  This
} from '@flex-development/esast'

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
        .toExtend<NodeObject<ArrayPattern>>()
    })

    it('should match NodeObject<AssignmentPattern>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toExtend<NodeObject<AssignmentPattern>>()
    })

    it('should match NodeObject<Identifier>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toExtend<NodeObject<Identifier>>()
    })

    it('should match NodeObject<MemberExpression>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toExtend<NodeObject<MemberExpression>>()
    })

    it('should match NodeObject<ObjectPattern>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toExtend<NodeObject<ObjectPattern>>()
    })

    it('should match NodeObject<RestElement>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toExtend<NodeObject<RestElement>>()
    })

    it('should match NodeObject<This>', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toExtend<NodeObject<This>>()
    })
  })
})
