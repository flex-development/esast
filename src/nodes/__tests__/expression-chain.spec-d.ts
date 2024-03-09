/**
 * @file Type Tests - ChainExpression
 * @module esast/nodes/tests/unit-d/ChainExpression
 */

import type {
  CallExpression,
  Data,
  MemberExpression,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-chain'

describe('unit-d:nodes/ChainExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ChainExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [CallExpression | MemberExpression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[CallExpression | MemberExpression]>()
  })

  it('should match [data?: Optional<ChainExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "chainExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'chainExpression'>()
  })

  describe('ChainExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
