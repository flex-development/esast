/**
 * @file Type Tests - AwaitExpression
 * @module esast/nodes/tests/unit-d/AwaitExpression
 */

import type * as TestSubject from '#nodes/expression-await'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/AwaitExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AwaitExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: AwaitExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "awaitExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'awaitExpression'>()
  })

  describe('AwaitExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
