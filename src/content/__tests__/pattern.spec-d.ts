/**
 * @file Type Tests - pattern
 * @module esast/content/tests/unit-d/pattern
 */

import type { Identifier } from '@flex-development/esast'
import type * as TestSubject from '../pattern'

describe('unit-d:content/pattern', () => {
  describe('Pattern', () => {
    it('should equal PatternMap[keyof PatternMap]', () => {
      expectTypeOf<TestSubject.Pattern>()
        .toEqualTypeOf<TestSubject.PatternMap[keyof TestSubject.PatternMap]>
    })
  })

  describe('PatternMap', () => {
    it('should match [identifier: Identifier]', () => {
      expectTypeOf<TestSubject.PatternMap>()
        .toHaveProperty('identifier')
        .toEqualTypeOf<Identifier>
    })
  })
})
