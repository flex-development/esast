/**
 * @file Type Tests - FinallyBlock
 * @module esast/nodes/tests/unit-d/FinallyBlock
 */

import type * as TestSubject from '#nodes/finally-block'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/FinallyBlock', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FinallyBlockData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: FinallyBlockData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "finallyBlock"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'finallyBlock'>()
  })

  describe('FinallyBlockData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
