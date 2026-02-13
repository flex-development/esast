/**
 * @file Type Tests - This
 * @module esast/nodes/tests/unit-d/This
 */

import type * as TestSubject from '#nodes/this'
import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/This', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ThisData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: ThisData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "this"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'this'>()
  })

  describe('ThisData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
