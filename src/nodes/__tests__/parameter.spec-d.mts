/**
 * @file Type Tests - Parameter
 * @module esast/nodes/tests/unit-d/Parameter
 */

import type * as TestSubject from '#nodes/parameter'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Parameter', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParameterData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ParameterData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parameter"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'parameter'>()
  })

  describe('ParameterData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
