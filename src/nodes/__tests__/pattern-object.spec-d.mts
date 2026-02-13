/**
 * @file Type Tests - ObjectPattern
 * @module esast/nodes/tests/unit-d/ObjectPattern
 */

import type * as TestSubject from '#nodes/pattern-object'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ObjectPattern', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectPatternData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ObjectPatternData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "objectPattern"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'objectPattern'>()
  })

  describe('ObjectPatternData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
