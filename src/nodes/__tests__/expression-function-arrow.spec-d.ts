/**
 * @file Type Tests - ArrowFunctionExpression
 * @module esast/nodes/tests/unit-d/ArrowFunctionExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-function-arrow'

describe('unit-d:nodes/ArrowFunctionExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArrowFunctionExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [async: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('async').toEqualTypeOf<boolean>()
  })

  it('should match [data?: ArrowFunctionExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "arrowFunctionExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'arrowFunctionExpression'>()
  })

  describe('ArrowFunctionExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
