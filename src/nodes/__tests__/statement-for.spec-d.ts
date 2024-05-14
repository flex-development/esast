/**
 * @file Type Tests - ForStatement
 * @module esast/nodes/tests/unit-d/ForStatement
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-for'

describe('unit-d:nodes/ForStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ForStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [await: boolean | null | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('await')
      .toEqualTypeOf<boolean | null | undefined>()
  })

  it('should match [data?: ForStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "forStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'forStatement'>()
  })

  describe('ForStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
