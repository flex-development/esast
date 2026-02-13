/**
 * @file Type Tests - StaticBlock
 * @module esast/nodes/tests/unit-d/StaticBlock
 */

import type * as TestSubject from '#nodes/static-block'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/StaticBlock', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.StaticBlockData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: StaticBlockData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "staticBlock"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'staticBlock'>()
  })

  describe('StaticBlockData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
