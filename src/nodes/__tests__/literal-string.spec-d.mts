/**
 * @file Type Tests - StringLiteral
 * @module esast/nodes/tests/unit-d/StringLiteral
 */

import type TestSubject from '#nodes/literal-string'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/StringLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [type: "string"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'string'>()
  })

  it('should match [raw: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('raw').toEqualTypeOf<string>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<string>()
  })
})
