/**
 * @file Type Tests - ForStatement
 * @module esast/nodes/tests/unit-d/ForStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement,
  VariableDeclaration
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-for'

describe('unit-d:nodes/ForStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ForStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Nullable<Expression | VariableDeclaration>, Nullable<Expression>, Nullable<Expression>, Statement]]', () => {
    // Arrange
    type Expect = [
      Nullable<Expression | VariableDeclaration>,
      Nullable<Expression>,
      Nullable<Expression>,
      Statement
    ]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<ForStatementData>]', () => {
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
