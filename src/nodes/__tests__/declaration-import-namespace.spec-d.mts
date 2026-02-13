/**
 * @file Type Tests - ImportNamespaceDeclaration
 * @module esast/nodes/tests/unit-d/ImportNamespaceDeclaration
 */

import type * as TestSubject from '#nodes/declaration-import-namespace'
import type { ImportDeclaration, ImportKind } from '@flex-development/esast'

describe('unit-d:nodes/ImportNamespaceDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "namespace">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'namespace'>>()
  })
})
