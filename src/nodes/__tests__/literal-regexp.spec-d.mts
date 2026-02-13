/**
 * @file Type Tests - RegExpLiteral
 * @module esast/nodes/tests/unit-d/RegExpLiteral
 */

import type TestSubject from '#nodes/literal-regexp'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/RegExpLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [flags: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('flags').toEqualTypeOf<string>()
  })

  it('should match [pattern: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pattern')
      .toEqualTypeOf<string>()
  })

  it('should match [type: "regexp"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'regexp'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<string>()
  })
})
