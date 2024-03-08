/**
 * @file Type Tests - IfStatement
 * @module esast/nodes/tests/unit-d/IfStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-if'

describe('unit-d:nodes/IfStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IfStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression, Statement, Statement] | [Expression, Statement]]', () => {
    // Arrange
    type Expect = [Expression, Statement, Statement] | [Expression, Statement]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<IfStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "ifStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'ifStatement'>()
  })

  describe('IfStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
