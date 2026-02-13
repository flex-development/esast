/**
 * @file Type Tests - AssignmentExpression
 * @module esast/nodes/tests/unit-d/AssignmentExpression
 */

import type * as TestSubject from '#nodes/expression-assignment'
import type { AssignmentOperator, Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/AssignmentExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AssignmentExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: AssignmentExpressionData | undefined]', () => {
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
