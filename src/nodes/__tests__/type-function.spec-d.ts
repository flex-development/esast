/**
 * @file Type Tests - FunctionType
 * @module esast/nodes/tests/unit-d/FunctionType
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-function'

describe('unit-d:nodes/FunctionType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: FunctionTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "functionType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'functionType'>()
  })

  describe('FunctionTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
