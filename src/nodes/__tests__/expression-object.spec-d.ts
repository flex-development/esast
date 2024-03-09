/**
 * @file Type Tests - ObjectExpression
 * @module esast/nodes/tests/unit-d/ObjectExpression
 */

import type {
  Comment,
  Data,
  Parent,
  Property,
  SpreadElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-object'

describe('unit-d:nodes/ObjectExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ObjectExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Property | Spread)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Property | SpreadElement)[]>()
  })

  it('should match [data?: Optional<ObjectExpressionData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})