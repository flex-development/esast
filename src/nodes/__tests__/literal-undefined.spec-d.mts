/**
 * @file Type Tests - UndefinedLiteral
 * @module esast/nodes/tests/unit-d/UndefinedLiteral
 */

import type TestSubject from '#nodes/literal-undefined'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/UndefinedLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [type: "undefined"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'undefined'>()
  })

  it('should match [value: undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<undefined>()
  })
})
