/**
 * @file Type Tests - PropertyDefinition
 * @module esast/nodes/tests/unit-d/PropertyDefinition
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../definition-property'

describe('unit-d:nodes/PropertyDefinition', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.PropertyDefinitionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [computed: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('computed').toEqualTypeOf<boolean>()
  })

  it('should match [data?: Optional<PropertyDefinitionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "propertyDefinition"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'propertyDefinition'>()
  })

  describe('PropertyDefinitionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
