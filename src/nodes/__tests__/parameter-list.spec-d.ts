/**
 * @file Type Tests - ParameterList
 * @module esast/nodes/tests/unit-d/ParameterList
 */

import type { Comment, Data, Parent, Pattern } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../parameter-list'

describe('unit-d:nodes/ParameterList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ParameterListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Pattern)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Pattern)[]>()
  })

  it('should match [data?: Optional<ParamsData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})