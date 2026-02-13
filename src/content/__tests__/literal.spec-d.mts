/**
 * @file Type Tests - literal
 * @module esast/content/tests/unit-d/literal
 */

import type * as TestSubject from '#content/literal'
import type NodeObject from '#tests/types/node-object'
import type { PrimitiveMap, RegExpLiteral } from '@flex-development/esast'

describe('unit-d:content/literal', () => {
  describe('LiteralMap', () => {
    it('should extend PrimitiveMap', () => {
      expectTypeOf<TestSubject.LiteralMap>().toExtend<PrimitiveMap>()
    })

    it('should match NodeObject<RegExpLiteral>', () => {
      expectTypeOf<TestSubject.LiteralMap>()
        .toExtend<NodeObject<RegExpLiteral>>()
    })
  })

  describe('LiteralValue', () => {
    it('should equal LiteralMap[keyof LiteralMap]', () => {
      expectTypeOf<TestSubject.LiteralValue>()
        .toEqualTypeOf<TestSubject.LiteralMap[keyof TestSubject.LiteralMap]>
    })
  })
})
