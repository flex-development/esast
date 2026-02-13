/**
 * @file Type Tests - StaticBlockBody
 * @module esast/nodes/tests/unit-d/StaticBlockBody
 */

import type * as TestSubject from '#nodes/static-block-body'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/StaticBlockBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.StaticBlockBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: StaticBlockBodyData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "staticBlockBody"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'staticBlockBody'>()
  })

  describe('StaticBlockBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
