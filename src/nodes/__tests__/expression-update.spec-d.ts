/**
 * @file Type Tests - UpdateExpression
 * @module esast/nodes/tests/unit-d/UpdateExpression
 */

import type { Data, Parent, UpdateOperator } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-update'

describe('unit-d:nodes/UpdateExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.UpdateExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: UpdateExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: UpdateOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<UpdateOperator>()
  })

  it('should match [prefix: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('prefix').toEqualTypeOf<boolean>()
  })

  it('should match [type: "updateExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'updateExpression'>()
  })

  describe('UpdateExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
