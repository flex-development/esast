/**
 * @file Type Tests - BigIntLiteral
 * @module esast/nodes/tests/unit-d/BigIntLiteral
 */

import type { Literal } from '@flex-development/esast'
import type TestSubject from '../literal-bigint'

describe('unit-d:nodes/BigIntLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "bigint"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'bigint'>()
  })

  it('should match [value: bigint]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<bigint>()
  })
})
