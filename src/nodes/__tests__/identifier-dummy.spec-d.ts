/**
 * @file Type Tests - DummyIdentifier
 * @module esast/nodes/tests/unit-d/DummyIdentifier
 */

import type { Identifier } from '@flex-development/esast'
import type TestSubject from '../identifier-dummy'

describe('unit-d:nodes/DummyIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Identifier>()
  })

  it('should match [name: "✖"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<'✖'>()
  })
})
