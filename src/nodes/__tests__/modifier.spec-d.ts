/**
 * @file Type Tests - Modifier
 * @module esast/nodes/tests/unit-d/Modifier
 */

import type { Literal, ModifierValue } from '@flex-development/esast'
import type * as TestSubject from '../modifier'

describe('unit-d:nodes/Modifier', () => {
  type Subject = TestSubject.default

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "modifier"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'modifier'>()
  })

  it('should match [value: ModifierValue]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<ModifierValue>()
  })
})
