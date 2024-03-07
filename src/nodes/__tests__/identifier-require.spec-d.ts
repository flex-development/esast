/**
 * @file Type Tests - IdentifierRequire
 * @module esast/nodes/tests/unit-d/IdentifierRequire
 */

import type { Identifier } from '@flex-development/esast'
import type TestSubject from '../identifier-require'

describe('unit-d:nodes/IdentifierRequire', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Identifier>()
  })

  it('should match [name: "require"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<'require'>()
  })
})
