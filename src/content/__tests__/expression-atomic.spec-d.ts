/**
 * @file Type Tests - atomicExpression
 * @module esast/content/tests/unit-d/atomicExpression
 */

import type { NodeObject } from '#tests/types'
import type {
  ArrowFunctionExpression,
  ModuleExpression,
  NewExpression,
  PrimaryExpressionMap,
  Super
} from '@flex-development/esast'
import type * as TestSubject from '../expression-atomic'

describe('unit-d:content/atomicExpression', () => {
  describe('AtomicExpression', () => {
    it('should equal AtomicExpressionMap[keyof AtomicExpressionMap]', () => {
      // Arrange
      type M = TestSubject.AtomicExpressionMap
      type Expect = M[keyof M]

      // Expect
      expectTypeOf<TestSubject.AtomicExpression>().toEqualTypeOf<Expect>
    })
  })

  describe('PrimaryExpressionMap', () => {
    it('should extend LiteralMap', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<PrimaryExpressionMap>()
    })

    it('should match NodeObject<ArrowFunctionExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ArrowFunctionExpression>>()
    })

    it('should match NodeObject<ModuleExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<ModuleExpression>>()
    })

    it('should match NodeObject<NewExpression>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<NewExpression>>()
    })

    it('should match NodeObject<Super>', () => {
      expectTypeOf<TestSubject.AtomicExpressionMap>()
        .toMatchTypeOf<NodeObject<Super>>()
    })
  })
})
