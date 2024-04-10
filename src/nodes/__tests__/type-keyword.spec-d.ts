/**
 * @file Type Tests - TypeKeyword
 * @module esast/nodes/tests/unit-d/TypeKeyword
 */

import type { Literal, TypeKeywordValue } from '@flex-development/esast'
import type * as TestSubject from '../type-keyword'

describe('unit-d:nodes/TypeKeyword', () => {
  type Subject = TestSubject.default

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [type: "typeKeyword"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeKeyword'>()
  })

  it('should match [value: TypeKeywordValue]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('value')
      .toEqualTypeOf<TypeKeywordValue>()
  })
})
