/**
 * @file Type Tests - DoWhileStatement
 * @module esast/nodes/tests/unit-d/DoWhileStatement
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-do-while'

describe('unit-d:nodes/DoWhileStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DoWhileStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<DoWhileStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "doWhileStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'doWhileStatement'>()
  })

  describe('DoWhileStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
