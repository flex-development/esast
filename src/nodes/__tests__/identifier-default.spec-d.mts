/**
 * @file Type Tests - DefaultIdentifier
 * @module esast/nodes/tests/unit-d/DefaultIdentifier
 */

import type TestSubject from '#nodes/identifier-default'
import type { Identifier } from '@flex-development/esast'

describe('unit-d:nodes/DefaultIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toExtend<Identifier>()
  })

  it('should match [name: "default"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<'default'>()
  })
})
