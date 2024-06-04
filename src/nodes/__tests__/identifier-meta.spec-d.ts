/**
 * @file Type Tests - MetaIdentifier
 * @module esast/nodes/tests/unit-d/MetaIdentifier
 */

import type { Identifier } from '@flex-development/esast'
import type TestSubject from '../identifier-meta'

describe('unit-d:nodes/MetaIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Identifier>()
  })

  it('should match [name: "meta"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<'meta'>()
  })
})
