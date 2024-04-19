/**
 * @file Type Tests - MethodProperty
 * @module esast/nodes/tests/unit-d/MethodProperty
 */

import type { Property } from '@flex-development/esast'
import type * as TestSubject from '../property-method'

describe('unit-d:nodes/MethodProperty', () => {
  type Subject = TestSubject.default

  it('should extend Property', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Property>()
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
