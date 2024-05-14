/**
 * @file Type Tests - ForXStatement
 * @module esast/nodes/tests/unit-d/ForXStatement
 */

import type { Parent } from '@flex-development/esast'
import type TestSubject from '../statement-for-x'

describe('unit-d:nodes/ForXStatement', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should match [await: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('await')
      .toEqualTypeOf<boolean | null | undefined>()
  })

  it('should match [type: `for${\'In\' | \'Of\'}Statement`]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<`for${'In' | 'Of'}Statement`>()
  })
})
