/**
 * @file Type Tests - ReturnStatement
 * @module esast/nodes/tests/unit-d/ReturnStatement
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-return'

describe('unit-d:nodes/ReturnStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ReturnStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: EmptyArray | [Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<EmptyArray | [Expression]>()
  })

  it('should match [data?: Optional<ReturnStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "returnStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'returnStatement'>()
  })

  describe('ReturnStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
