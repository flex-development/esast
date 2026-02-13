/**
 * @file Type Tests - BigIntLiteral
 * @module esast/nodes/tests/unit-d/BigIntLiteral
 */

import type TestSubject from '#nodes/literal-bigint'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/BigIntLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [type: "bigint"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'bigint'>()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('raw').toEqualTypeOf<string>()
  })

  it('should match [value: bigint]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<bigint>()
  })
})
