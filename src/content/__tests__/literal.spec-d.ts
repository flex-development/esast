/**
 * @file Type Tests - literal
 * @module esast/content/tests/unit-d/literal
 */

import type { PrimitiveMap, RegExpLiteral } from '@flex-development/esast'
import type * as TestSubject from '../literal'

describe('unit-d:content/literal', () => {
  describe('LiteralMap', () => {
    it('should extend PrimitiveMap', () => {
      expectTypeOf<TestSubject.LiteralMap>().toMatchTypeOf<PrimitiveMap>()
    })

    it('should match [regexp: RegExpLiteral]', () => {
      expectTypeOf<TestSubject.LiteralMap>()
        .toHaveProperty('regexp')
        .toEqualTypeOf<RegExpLiteral>
    })
  })

  describe('LiteralValue', () => {
    it('should equal LiteralMap[keyof LiteralMap]', () => {
      expectTypeOf<TestSubject.LiteralValue>()
        .toEqualTypeOf<TestSubject.LiteralMap[keyof TestSubject.LiteralMap]>
    })
  })
})
