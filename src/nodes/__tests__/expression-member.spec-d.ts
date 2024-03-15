/**
 * @file Type Tests - MemberExpression
 * @module esast/nodes/tests/unit-d/MemberExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-member'

describe('unit-d:nodes/MemberExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MemberExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [computed: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('computed').toEqualTypeOf<boolean>()
  })

  it('should match [data?: Optional<MemberExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [optional: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('optional').toEqualTypeOf<boolean>()
  })

  it('should match [type: "memberExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'memberExpression'>()
  })

  describe('MemberExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
