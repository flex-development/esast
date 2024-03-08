/**
 * @file Type Tests - AssignmentExpression
 * @module esast/nodes/tests/unit-d/AssignmentExpression
 */

import type {
  AssignmentOperator,
  Data,
  Expression,
  Parent,
  Pattern
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-assignment'

describe('unit-d:nodes/AssignmentExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AssignmentExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Pattern, Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Pattern, Expression]>()
  })

  it('should match [data?: Optional<AssignmentExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: AssignmentOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<AssignmentOperator>()
  })

  it('should match [type: "assignmentExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'assignmentExpression'>()
  })

  describe('AssignmentExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
