/**
 * @file Type Tests - WithStatement
 * @module esast/nodes/tests/unit-d/WithStatement
 */

import type * as TestSubject from '#nodes/statement-with'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/WithStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.WithStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: WithStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "withStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'withStatement'>()
  })

  describe('WithStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
