/**
 * @file Type Tests - MethodProperty
 * @module esast/nodes/tests/unit-d/MethodProperty
 */

import type * as TestSubject from '#nodes/property-method'
import type { Property } from '@flex-development/esast'

describe('unit-d:nodes/MethodProperty', () => {
  type Subject = TestSubject.default

  it('should extend Property', () => {
    expectTypeOf<Subject>().toExtend<Property>()
  })

  it('should match [assignment: false]', () => {
    expectTypeOf<Subject>().toHaveProperty('assignment').toEqualTypeOf<false>()
  })

  it('should match [method: true]', () => {
    expectTypeOf<Subject>().toHaveProperty('method').toEqualTypeOf<true>()
  })

  it('should match [shorthand: false]', () => {
    expectTypeOf<Subject>().toHaveProperty('shorthand').toEqualTypeOf<false>()
  })
})
