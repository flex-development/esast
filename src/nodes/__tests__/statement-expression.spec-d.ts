/**
 * @file Type Tests - ExpressionStatement
 * @module esast/nodes/tests/unit-d/ExpressionStatement
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-expression'

describe('unit-d:nodes/ExpressionStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExpressionStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression]>()
  })

  it('should match [data?: Optional<ExpressionStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "expressionStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'expressionStatement'>()
  })

  describe('ExpressionStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [parentheses?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('parentheses')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
