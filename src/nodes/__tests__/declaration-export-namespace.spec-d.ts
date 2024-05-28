/**
 * @file Type Tests - ExportNamespaceDeclaration
 * @module esast/nodes/tests/unit-d/ExportNamespaceDeclaration
 */

import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-export-namespace'

describe('unit-d:nodes/ExportNamespaceDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "namespace">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'namespace'>>()
  })
})
