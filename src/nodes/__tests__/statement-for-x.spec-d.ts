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

  it('should match [type: `for${Uppercase<string>}${string}`]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<`for${Uppercase<string>}${string}`>()
  })
})
