/**
 * @file Type Tests - ArrayExpression
 * @module esast/nodes/tests/unit-d/ArrayExpression
 */

import type * as TestSubject from '#nodes/expression-array'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ArrayExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArrayExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ArrayExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "arrayExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'arrayExpression'>()
  })

  describe('ArrayExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
