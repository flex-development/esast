/**
 * @file Type Tests - NumberLiteral
 * @module esast/nodes/tests/unit-d/NumberLiteral
 */

import type TestSubject from '#nodes/literal-number'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/NumberLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [type: "number"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'number'>()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('raw').toEqualTypeOf<string>()
  })

  it('should match [value: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<number>()
  })
})
