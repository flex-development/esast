/**
 * @file Type Tests - FunctionLike
 * @module esast/nodes/tests/unit-d/FunctionLike
 */

import type { Parent } from '@flex-development/esast'
import type * as TestSubject from '../function-like'

describe('unit-d:nodes/FunctionLike', () => {
  type Subject = TestSubject.default

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [async: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('async').toEqualTypeOf<boolean>()
  })

  it('should match [generator: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('generator').toEqualTypeOf<boolean>()
  })

  it('should match [type: `function${"Declaration" | "Expression"}`]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<`function${'Declaration' | 'Expression'}`>()
  })
})
