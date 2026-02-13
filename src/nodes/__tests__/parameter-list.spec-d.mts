/**
 * @file Type Tests - ParameterList
 * @module esast/nodes/tests/unit-d/ParameterList
 */

import type * as TestSubject from '#nodes/parameter-list'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ParameterList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParameterListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ParamaterListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "parameterList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'parameterList'>()
  })

  describe('ParameterListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
