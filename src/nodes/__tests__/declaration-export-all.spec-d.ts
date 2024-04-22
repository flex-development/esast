/**
 * @file Type Tests - ExportAllDeclaration
 * @module esast/nodes/tests/unit-d/ExportAllDeclaration
 */

import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-export-all'

describe('unit-d:nodes/ExportAllDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "namespace">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'namespace'>>()
  })
})
