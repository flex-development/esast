/**
 * @file Type Tests - TypeParameter
 * @module esast/nodes/tests/unit-d/TypeParameter
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-parameter'

describe('unit-d:nodes/TypeParameter', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeParameterData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<TypeParameterData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
