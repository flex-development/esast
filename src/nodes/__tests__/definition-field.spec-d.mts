/**
 * @file Type Tests - FieldDefinition
 * @module esast/nodes/tests/unit-d/FieldDefinition
 */

import type * as TestSubject from '#nodes/definition-field'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/FieldDefinition', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FieldDefinitionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [computed: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('computed').toEqualTypeOf<boolean>()
  })

  it('should match [data?: FieldDefinitionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [static: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('static').toEqualTypeOf<boolean>()
  })

  it('should match [type: "fieldDefinition"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'fieldDefinition'>()
  })

  describe('FieldDefinitionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
