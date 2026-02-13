/**
 * @file Type Tests - ExportNamespaceDeclaration
 * @module esast/nodes/tests/unit-d/ExportNamespaceDeclaration
 */

import type * as TestSubject from '#nodes/declaration-export-namespace'
import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'

describe('unit-d:nodes/ExportNamespaceDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "namespace">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'namespace'>>()
  })
})
