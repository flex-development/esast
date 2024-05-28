/**
 * @file Type Tests - MixedImportDeclaration
 * @module esast/nodes/tests/unit-d/MixedImportDeclaration
 */

import type { ImportDeclaration, ImportKind } from '@flex-development/esast'
import type * as TestSubject from '../declaration-import-mixed'

describe('unit-d:nodes/MixedImportDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, `default+${string}`>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, `default+${string}`>>()
  })
})
