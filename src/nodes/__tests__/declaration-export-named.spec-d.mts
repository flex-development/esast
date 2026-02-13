/**
 * @file Type Tests - ExportNamedDeclaration
 * @module esast/nodes/tests/unit-d/ExportNamedDeclaration
 */

import type * as TestSubject from '#nodes/declaration-export-named'
import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'

describe('unit-d:nodes/ExportNamedDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "named">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'named'>>()
  })
})
