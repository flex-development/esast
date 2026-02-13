/**
 * @file Type Tests - TemplateElement
 * @module esast/nodes/tests/unit-d/TemplateElement
 */

import type * as TestSubject from '#nodes/element-template'
import type { Data, Literal } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TemplateElement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplateElementData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toExtend<Literal>()
  })

  it('should match [data?: TemplateElementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "templateElement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'templateElement'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<string>()
  })

  describe('TemplateElementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })

    it('should match [cooked?: string | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('cooked')
        .toEqualTypeOf<Nilable<string>>()
    })
  })
})
