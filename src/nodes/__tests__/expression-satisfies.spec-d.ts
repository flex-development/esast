/**
 * @file Type Tests - SatisfiesExpression
 * @module esast/nodes/tests/unit-d/SatisfiesExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-satisfies'

describe('unit-d:nodes/SatisfiesExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SatisfiesExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: SatisfiesExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "satisfiesExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'satisfiesExpression'>()
  })

  describe('SatisfiesExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
