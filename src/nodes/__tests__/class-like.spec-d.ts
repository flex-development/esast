/**
 * @file Type Tests - ClassLike
 * @module esast/nodes/tests/unit-d/ClassLike
 */

import type { Parent } from '@flex-development/esast'
import type * as TestSubject from '../class-like'

describe('unit-d:nodes/ClassLike', () => {
  type Subject = TestSubject.default

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [type: `class${"Declaration" | "Expression"}`]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<`class${'Declaration' | 'Expression'}`>()
  })
})
