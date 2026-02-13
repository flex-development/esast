/**
 * @file Type Tests - BooleanLiteral
 * @module esast/nodes/tests/unit-d/BooleanLiteral
 */

import type TestSubject from '#nodes/literal-boolean'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/BooleanLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [type: "boolean"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'boolean'>()
  })

  it('should match [value: boolean]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<boolean>()
  })
})
