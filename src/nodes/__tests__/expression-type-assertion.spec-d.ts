/**
 * @file Type Tests - TypeAssertionExpression
 * @module esast/nodes/tests/unit-d/TypeAssertionExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-type-assertion'

describe('unit-d:nodes/TypeAssertionExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAssertionExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeAssertionExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeAssertionExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeAssertionExpression'>()
  })

  describe('TypeAssertionExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
