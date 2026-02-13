/**
 * @file Type Tests - TryStatement
 * @module esast/nodes/tests/unit-d/TryStatement
 */

import type * as TestSubject from '#nodes/statement-try'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TryStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TryStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TryStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "tryStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'tryStatement'>()
  })

  describe('TryStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
