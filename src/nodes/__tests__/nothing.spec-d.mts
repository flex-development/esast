/**
 * @file Type Tests - Nothing
 * @module esast/nodes/tests/unit-d/Nothing
 */

import type TestSubject from '#nodes/nothing'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/Nothing', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
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
