/**
 * @file Type Tests - CallExpression
 * @module esast/nodes/tests/unit-d/CallExpression
 */

import type {
  Comment,
  Data,
  Expression,
  Parent,
  SpreadElement,
  Super
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-call'

describe('unit-d:nodes/CallExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CallExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression | Super, ...(Comment | Expression | SpreadElement)[]]]', () => {
    // Arrange
    type Expect = [
      Expression | Super,
      ...(Comment | Expression | SpreadElement)[]
    ]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<CallExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [new: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('new').toEqualTypeOf<boolean>()
  })

  it('should match [optional: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('optional').toEqualTypeOf<boolean>()
  })

  it('should match [type: "callExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'callExpression'>()
  })

  describe('CallExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
