/**
 * @file Type Tests - ImportDefaultDeclaration
 * @module esast/nodes/tests/unit-d/ImportDefaultDeclaration
 */

import type * as TestSubject from '#nodes/declaration-import-default'
import type { ImportDeclaration, ImportKind } from '@flex-development/esast'

describe('unit-d:nodes/ImportDefaultDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "default">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'default'>>()
  })
})
