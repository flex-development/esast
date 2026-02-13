/**
 * @file Type Tests - ImportEffectDeclaration
 * @module esast/nodes/tests/unit-d/ImportEffectDeclaration
 */

import type * as TestSubject from '#nodes/declaration-import-effect'
import type { ImportDeclaration, ImportKind } from '@flex-development/esast'

describe('unit-d:nodes/ImportEffectDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "effect">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'effect'>>()
  })
})
