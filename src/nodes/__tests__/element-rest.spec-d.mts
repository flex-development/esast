/**
 * @file Type Tests - RestElement
 * @module esast/nodes/tests/unit-d/RestElement
 */

import type * as TestSubject from '#nodes/element-rest'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/RestElement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.RestElementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: RestElementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "restElement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'restElement'>()
  })

  describe('RestElementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
