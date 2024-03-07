/**
 * @file Type Tests - UndefinedLiteral
 * @module esast/nodes/tests/unit-d/UndefinedLiteral
 */

import type { Literal } from '@flex-development/esast'
import type TestSubject from '../literal-undefined'

describe('unit-d:nodes/UndefinedLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
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
