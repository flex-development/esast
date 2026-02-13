/**
 * @file Type Tests - ImportNamedDeclaration
 * @module esast/nodes/tests/unit-d/ImportNamedDeclaration
 */

import type * as TestSubject from '#nodes/declaration-import-named'
import type { ImportDeclaration, ImportKind } from '@flex-development/esast'

describe('unit-d:nodes/ImportNamedDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "named">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'named'>>()
  })
})
