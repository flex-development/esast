/**
 * @file Type Tests - MixedImportDeclaration
 * @module esast/nodes/tests/unit-d/MixedImportDeclaration
 */

import type * as TestSubject from '#nodes/declaration-import-mixed'
import type { ImportDeclaration, ImportKind } from '@flex-development/esast'

describe('unit-d:nodes/MixedImportDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, `default+${string}`>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, `default+${string}`>>()
  })
})
