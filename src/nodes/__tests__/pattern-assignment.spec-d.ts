/**
 * @file Type Tests - AssignmentPattern
 * @module esast/nodes/tests/unit-d/AssignmentPattern
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../pattern-assignment'

describe('unit-d:nodes/AssignmentPattern', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AssignmentPatternData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: AssignmentPatternData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "assignmentPattern"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'assignmentPattern'>()
  })

  describe('AssignmentPatternData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
