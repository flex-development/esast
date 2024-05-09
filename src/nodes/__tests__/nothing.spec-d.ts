/**
 * @file Type Tests - Nothing
 * @module esast/nodes/tests/unit-d/Nothing
 */

import type { Literal } from '@flex-development/esast'
import type TestSubject from '../nothing'

describe('unit-d:nodes/Nothing', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "nothing"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'nothing'>()
  })

  it('should match [value: null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<null | undefined>()
  })
})
