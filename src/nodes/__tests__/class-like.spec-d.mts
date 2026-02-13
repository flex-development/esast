/**
 * @file Type Tests - ClassLike
 * @module esast/nodes/tests/unit-d/ClassLike
 */

import type * as TestSubject from '#nodes/class-like'
import type { Parent } from '@flex-development/esast'

describe('unit-d:nodes/ClassLike', () => {
  type Subject = TestSubject.default

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [type: `class${"Declaration" | "Expression"}`]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<`class${'Declaration' | 'Expression'}`>()
  })
})
