/**
 * @file Type Tests - ContinueStatement
 * @module esast/nodes/tests/unit-d/ContinueStatement
 */

import type { Data, Identifier, Parent } from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-continue'

describe('unit-d:nodes/ContinueStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ContinueStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: EmptyArray | [Identifier]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<EmptyArray | [Identifier]>()
  })

  it('should match [data?: Optional<ContinueStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "continueStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'continueStatement'>()
  })

  describe('ContinueStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})