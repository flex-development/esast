/**
 * @file Type Tests - NullLiteral
 * @module esast/nodes/tests/unit-d/NullLiteral
 */

import type TestSubject from '#nodes/literal-null'
import type { Literal } from '@flex-development/esast'

describe('unit-d:nodes/NullLiteral', () => {
  it('should extend Literal', () => {
    expectTypeOf<TestSubject>().toExtend<Literal>()
  })

  it('should match [type: "null"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<'null'>()
  })

  it('should match [value: null]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<null>()
  })
})
