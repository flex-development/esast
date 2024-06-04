/**
 * @file Type Tests - RequireIdentifier
 * @module esast/nodes/tests/unit-d/RequireIdentifier
 */

import type { Identifier } from '@flex-development/esast'
import type TestSubject from '../identifier-require'

describe('unit-d:nodes/RequireIdentifier', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Identifier>()
  })

  it('should match [name: "require"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<'require'>()
  })
})
