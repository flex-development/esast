/**
 * @file Type Tests - ForXStatement
 * @module esast/nodes/tests/unit-d/ForXStatement
 */

import type TestSubject from '#nodes/statement-for-x'
import type { Parent } from '@flex-development/esast'

describe('unit-d:nodes/ForXStatement', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toExtend<Parent>()
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
