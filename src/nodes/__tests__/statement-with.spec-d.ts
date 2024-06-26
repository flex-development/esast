/**
 * @file Type Tests - WithStatement
 * @module esast/nodes/tests/unit-d/WithStatement
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-with'

describe('unit-d:nodes/WithStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.WithStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
