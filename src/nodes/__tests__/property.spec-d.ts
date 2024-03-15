/**
 * @file Type Tests - Property
 * @module esast/nodes/tests/unit-d/Property
 */

import type { Data, Parent, PropertyKind } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../property'

describe('unit-d:nodes/Property', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.PropertyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [computed: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('computed').toEqualTypeOf<boolean>()
  })

  it('should match [data?: Optional<PropertyData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: PropertyKind]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<PropertyKind>()
  })

  it('should match [method: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('method').toEqualTypeOf<boolean>()
  })

  it('should match [shorthand: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('shorthand').toEqualTypeOf<boolean>()
  })

  it('should match [type: "property"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'property'>()
  })

  describe('PropertyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [assignment?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('assignment')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
