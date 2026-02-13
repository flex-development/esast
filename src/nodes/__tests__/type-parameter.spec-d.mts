/**
 * @file Type Tests - TypeParameter
 * @module esast/nodes/tests/unit-d/TypeParameter
 */

import type * as TestSubject from '#nodes/type-parameter'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TypeParameter', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeParameterData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TypeParameterData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeParameter"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeParameter'>()
  })

  describe('TypeParameterData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
