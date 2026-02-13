/**
 * @file Type Tests - AssignmentProperty
 * @module esast/nodes/tests/unit-d/AssignmentProperty
 */

import type * as TestSubject from '#nodes/property-assignment'
import type { Property, PropertyKind } from '@flex-development/esast'

describe('unit-d:nodes/AssignmentProperty', () => {
  type Subject = TestSubject.default

  it('should extend Property', () => {
    expectTypeOf<Subject>().toExtend<Property>()
  })

  it('should match [assignment: true]', () => {
    expectTypeOf<Subject>().toHaveProperty('assignment').toEqualTypeOf<true>()
  })

  it('should match [kind: Extract<PropertyKind, "init">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<PropertyKind, 'init'>>()
  })

  it('should match [method: false]', () => {
    expectTypeOf<Subject>().toHaveProperty('method').toEqualTypeOf<false>()
  })
})
