/**
 * @file Type Tests - ImportIdentifier
 * @module esast/nodes/tests/unit-d/ImportIdentifier
 */

import type TestSubject from '#nodes/identifier-import'
import type { Identifier } from '@flex-development/esast'

describe('unit-d:nodes/ImportIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toExtend<Identifier>()
  })

  it('should match [name: "import"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<'import'>()
  })
})
