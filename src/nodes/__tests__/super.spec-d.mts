/**
 * @file Type Tests - Super
 * @module esast/nodes/tests/unit-d/Super
 */

import type * as TestSubject from '#nodes/super'
import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Super', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SuperData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: SuperData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "super"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'super'>()
  })

  describe('SuperData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
