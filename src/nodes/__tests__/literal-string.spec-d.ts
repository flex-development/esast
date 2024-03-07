/**
 * @file Type Tests - StringLiteral
 * @module esast/nodes/tests/unit-d/StringLiteral
 */

import type { Literal } from '@flex-development/esast'
import type TestSubject from '../literal-string'

describe('unit-d:nodes/StringLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "string"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'string'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<string>()
  })
})
