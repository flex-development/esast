/**
 * @file Type Tests - NonNullExpression
 * @module esast/nodes/tests/unit-d/NonNullExpression
 */

import type * as TestSubject from '#nodes/expression-non-null'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/NonNullExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NonNullExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: NonNullExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "nonNullExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'nonNullExpression'>()
  })

  describe('NonNullExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
