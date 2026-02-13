/**
 * @file Type Tests - ExportDefaultDeclaration
 * @module esast/nodes/tests/unit-d/ExportDefaultDeclaration
 */

import type * as TestSubject from '#nodes/declaration-export-default'
import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'

describe('unit-d:nodes/ExportDefaultDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "default">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'default'>>()
  })
})
