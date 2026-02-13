/**
 * @file Type Tests - MetaIdentifier
 * @module esast/nodes/tests/unit-d/MetaIdentifier
 */

import type TestSubject from '#nodes/identifier-meta'
import type { Identifier } from '@flex-development/esast'

describe('unit-d:nodes/MetaIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toExtend<Identifier>()
  })

  it('should match [name: "meta"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<'meta'>()
  })
})
