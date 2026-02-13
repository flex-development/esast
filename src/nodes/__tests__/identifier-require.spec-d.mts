/**
 * @file Type Tests - RequireIdentifier
 * @module esast/nodes/tests/unit-d/RequireIdentifier
 */

import type TestSubject from '#nodes/identifier-require'
import type { Identifier } from '@flex-development/esast'

describe('unit-d:nodes/RequireIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toExtend<Identifier>()
  })

  it('should match [name: "require"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<'require'>()
  })
})
