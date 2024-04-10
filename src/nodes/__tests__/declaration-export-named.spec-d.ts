/**
 * @file Type Tests - ExportNamedDeclaration
 * @module esast/nodes/tests/unit-d/ExportNamedDeclaration
 */

import type {
  ExportDeclaration,
  ImportExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-export-named'

describe('unit-d:nodes/ExportNamedDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ExportDeclaration>()
  })

  it('should match [kind: Extract<ImportExportKind, "named">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportExportKind, 'named'>>()
  })
})
