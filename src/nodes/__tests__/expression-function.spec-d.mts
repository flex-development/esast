/**
 * @file Type Tests - FunctionExpression
 * @module esast/nodes/tests/unit-d/FunctionExpression
 */

import type * as TestSubject from '#nodes/expression-function'
import type { Data, FunctionLike } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/FunctionExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionExpressionData

  it('should extend FunctionLike', () => {
    expectTypeOf<Subject>().toExtend<FunctionLike>()
  })

  it('should match [data?: FunctionExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "functionExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'functionExpression'>()
  })

  describe('FunctionExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
