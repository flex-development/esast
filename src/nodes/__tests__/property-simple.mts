/**
 * @file Type Tests - SimpleProperty
 * @module esast/nodes/tests/unit-d/SimpleProperty
 */

import type * as TestSubject from '#nodes/property-simple'
import type { Property, PropertyKind } from '@flex-development/esast'

describe('unit-d:nodes/SimpleProperty', () => {
  type Subject = TestSubject.default

  it('should extend Property', () => {
    expectTypeOf<Subject>().toExtend<Property>()
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

  it('should match [shorthand: false]', () => {
    expectTypeOf<Subject>().toHaveProperty('shorthand').toEqualTypeOf<false>()
  })
})
