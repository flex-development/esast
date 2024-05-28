/**
 * @file Type Tests - ImportDefaultDeclaration
 * @module esast/nodes/tests/unit-d/ImportDefaultDeclaration
 */

import type { ImportDeclaration, ImportKind } from '@flex-development/esast'
import type * as TestSubject from '../declaration-import-default'

describe('unit-d:nodes/ImportDefaultDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "default">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'default'>>()
  })
})
