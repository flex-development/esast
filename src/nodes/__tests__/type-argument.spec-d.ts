/**
 * @file Type Tests - TypeArgument
 * @module esast/nodes/tests/unit-d/TypeArgument
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-argument'

describe('unit-d:nodes/TypeArgument', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeArgumentData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeArgumentData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeArgument"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeArgument'>()
  })

  describe('TypeArgumentData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
