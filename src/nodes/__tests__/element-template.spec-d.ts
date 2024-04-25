/**
 * @file Type Tests - TemplateElement
 * @module esast/nodes/tests/unit-d/TemplateElement
 */

import type { Data, Literal } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../element-template'

describe('unit-d:nodes/TemplateElement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplateElementData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [data?: Optional<TemplateElementData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [cooked: Nilable<string>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('cooked')
        .toEqualTypeOf<Nilable<string>>()
    })
  })
})
