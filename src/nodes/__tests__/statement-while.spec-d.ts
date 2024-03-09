/**
 * @file Type Tests - WhileStatement
 * @module esast/nodes/tests/unit-d/WhileStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-while'

describe('unit-d:nodes/WhileStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.WhileStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression, Statement]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression, Statement]>()
  })

  it('should match [data?: Optional<WhileStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "whileStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'whileStatement'>()
  })

  describe('WhileStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
