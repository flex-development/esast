/**
 * @file Type Tests - ImportNamedDeclaration
 * @module esast/nodes/tests/unit-d/ImportNamedDeclaration
 */

import type {
  ImportDeclaration,
  ImportExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-import-named'

describe('unit-d:nodes/ImportNamedDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportExportKind, "named">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportExportKind, 'named'>>()
  })
})
