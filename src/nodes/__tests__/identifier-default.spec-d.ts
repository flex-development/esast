/**
 * @file Type Tests - IdentifierDefault
 * @module esast/nodes/tests/unit-d/IdentifierDefault
 */

import type { Identifier } from '@flex-development/esast'
import type TestSubject from '../identifier-default'

describe('unit-d:nodes/IdentifierDefault', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Identifier>()
  })

  it('should match [name: "default"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<'default'>()
  })
})
