/**
 * @file Type Tests - IdentifierImport
 * @module esast/nodes/tests/unit-d/IdentifierImport
 */

import type { Identifier } from '@flex-development/esast'
import type TestSubject from '../identifier-import'

describe('unit-d:nodes/IdentifierImport', () => {
  it('should extend Identifier', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Identifier>()
  })

  it('should match [name: "import"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<'import'>()
  })
})
