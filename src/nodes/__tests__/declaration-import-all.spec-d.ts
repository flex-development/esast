/**
 * @file Type Tests - ImportAllDeclaration
 * @module esast/nodes/tests/unit-d/ImportAllDeclaration
 */

import type {
  ImportDeclaration,
  ImportExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-import-all'

describe('unit-d:nodes/ImportAllDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportExportKind, "namespace">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportExportKind, 'namespace'>>()
  })
})
