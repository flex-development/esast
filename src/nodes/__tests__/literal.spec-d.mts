/**
 * @file Type Tests - Literal
 * @module esast/nodes/tests/unit-d/Literal
 */

import type TestSubject from '#nodes/literal'
import type { Node } from '@flex-development/esast'
import type { JsonPrimitive, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Literal', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toExtend<Node>()
  })

  it('should match [value: RegExp | bigint | boolean | number | string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<Optional<JsonPrimitive | RegExp | bigint>>()
  })
})
