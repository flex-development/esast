/**
 * @file Type Tests - ConstructorType
 * @module esast/nodes/tests/unit-d/ConstructorType
 */

import type * as TestSubject from '#nodes/type-constructor'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ConstructorType', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConstructorTypeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ConstructorTypeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "constructorType"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'constructorType'>()
  })

  describe('ConstructorTypeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
