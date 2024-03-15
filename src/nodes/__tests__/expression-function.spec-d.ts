/**
 * @file Type Tests - FunctionExpression
 * @module esast/nodes/tests/unit-d/FunctionExpression
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-function'

describe('unit-d:nodes/FunctionExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<FunctionExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "functionExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'functionExpression'>()
  })

  describe('FunctionExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [arrow?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('arrow')
        .toEqualTypeOf<Nilable<boolean>>()
    })

    it('should match [async?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('async')
        .toEqualTypeOf<Nilable<boolean>>()
    })

    it('should match [generator?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('generator')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
