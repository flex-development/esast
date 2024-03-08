/**
 * @file Type Tests - BreakStatement
 * @module esast/nodes/tests/unit-d/BreakStatement
 */

import type { Data, Identifier, Parent } from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-break'

describe('unit-d:nodes/BreakStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BreakStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: EmptyArray | [Identifier]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<EmptyArray | [Identifier]>()
  })

  it('should match [data?: Optional<BreakStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "breakStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'breakStatement'>()
  })

  describe('BreakStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
