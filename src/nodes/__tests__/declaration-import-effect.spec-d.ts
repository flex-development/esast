/**
 * @file Type Tests - ImportEffectDeclaration
 * @module esast/nodes/tests/unit-d/ImportEffectDeclaration
 */

import type {
  ImportDeclaration,
  ImportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-import-effect'

describe('unit-d:nodes/ImportEffectDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "effect">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'effect'>>()
  })
})
