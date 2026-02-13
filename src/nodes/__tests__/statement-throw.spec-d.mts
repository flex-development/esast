/**
 * @file Type Tests - ThrowStatement
 * @module esast/nodes/tests/unit-d/ThrowStatement
 */

import type * as TestSubject from '#nodes/statement-throw'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ThrowStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ThrowStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ThrowStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "throwStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'throwStatement'>()
  })

  describe('ThrowStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
