/**
 * @file Type Tests - ObjectExpression
 * @module esast/nodes/tests/unit-d/ObjectExpression
 */

import type * as TestSubject from '#nodes/expression-object'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ObjectExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ObjectExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "objectExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'objectExpression'>()
  })

  describe('ObjectExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
