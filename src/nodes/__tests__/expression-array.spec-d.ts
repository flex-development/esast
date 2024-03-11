/**
 * @file Type Tests - ArrayExpression
 * @module esast/nodes/tests/unit-d/ArrayExpression
 */

import type {
  Comment,
  Data,
  Expression,
  Nothing,
  Parent,
  SpreadElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-array'

describe('unit-d:nodes/ArrayExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArrayExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Expression | Nothing | SpreadElement)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Expression | Nothing | SpreadElement)[]>()
  })

  it('should match [data?: Optional<ArrayExpressionData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
