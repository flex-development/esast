/**
 * @file Type Tests - DummyIdentifier
 * @module esast/nodes/tests/unit-d/DummyIdentifier
 */

import type TestSubject from '#nodes/identifier-dummy'
import type { Identifier } from '@flex-development/esast'

describe('unit-d:nodes/DummyIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toExtend<Identifier>()
  })

  it('should match [name: "✖"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<'✖'>()
  })
})
