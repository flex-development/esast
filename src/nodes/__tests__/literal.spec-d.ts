/**
 * @file Type Tests - Literal
 * @module esast/nodes/tests/unit-d/Literal
 */

import type { Node } from '@flex-development/esast'
import type { JsonPrimitive, Optional } from '@flex-development/tutils'
import type TestSubject from '../literal'

describe('unit-d:nodes/Literal', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [value: Optional<JsonPrimitive | RegExp | bigint>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<Optional<JsonPrimitive | RegExp | bigint>>()
  })
})
