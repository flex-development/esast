/**
 * @file Type Tests - TemplatePlaceholder
 * @module esast/nodes/tests/unit-d/TemplatePlaceholder
 */

import type * as TestSubject from '#nodes/template-placeholder'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TemplatePlaceholder', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplatePlaceholderData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TemplatePlaceholderData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "templatePlaceholder"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'templatePlaceholder'>()
  })

  it('should match [typeOnly: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('typeOnly').toEqualTypeOf<boolean>()
  })

  describe('TemplatePlaceholderData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
