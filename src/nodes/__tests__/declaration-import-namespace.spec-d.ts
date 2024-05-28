/**
 * @file Type Tests - ImportNamespaceDeclaration
 * @module esast/nodes/tests/unit-d/ImportNamespaceDeclaration
 */

import type { ImportDeclaration, ImportKind } from '@flex-development/esast'
import type * as TestSubject from '../declaration-import-namespace'

describe('unit-d:nodes/ImportNamespaceDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "namespace">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'namespace'>>()
  })
})
