/**
 * @file Type Tests - ExportAssignment
 * @module esast/nodes/tests/unit-d/ExportAssignment
 */

import type {
  ExportDeclaration,
  ImportExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../export-assignment'

describe('unit-d:nodes/ExportAssignment', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ExportDeclaration>()
  })

  it('should match [kind: Extract<ImportExportKind, "assignment">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportExportKind, 'assignment'>>()
  })
})
