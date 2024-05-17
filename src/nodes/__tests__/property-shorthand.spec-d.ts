/**
 * @file Type Tests - ShorthandProperty
 * @module esast/nodes/tests/unit-d/ShorthandProperty
 */

import type { Property, PropertyKind } from '@flex-development/esast'
import type * as TestSubject from '../property-shorthand'

describe('unit-d:nodes/ShorthandProperty', () => {
  type Subject = TestSubject.default

  it('should extend Property', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Property>()
  })

  it('should match [assignment: false]', () => {
    expectTypeOf<Subject>().toHaveProperty('assignment').toEqualTypeOf<false>()
  })

  it('should match [kind: Extract<PropertyKind, "init">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<PropertyKind, 'init'>>()
  })

  it('should match [method: false]', () => {
    expectTypeOf<Subject>().toHaveProperty('method').toEqualTypeOf<false>()
  })

  it('should match [shorthand: true]', () => {
    expectTypeOf<Subject>().toHaveProperty('shorthand').toEqualTypeOf<true>()
  })
})
