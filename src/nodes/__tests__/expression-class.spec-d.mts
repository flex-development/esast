/**
 * @file Type Tests - ClassExpression
 * @module esast/nodes/tests/unit-d/ClassExpression
 */

import type * as TestSubject from '#nodes/expression-class'
import type { ClassLike, Data } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ClassExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassExpressionData

  it('should extend ClassLike', () => {
    expectTypeOf<Subject>().toExtend<ClassLike>()
  })

  it('should match [data?: ClassExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'classExpression'>()
  })

  describe('ClassExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
