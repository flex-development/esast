/**
 * @file Type Tests - ExportDefaultDeclaration
 * @module esast/nodes/tests/unit-d/ExportDefaultDeclaration
 */

import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-export-default'

describe('unit-d:nodes/ExportDefaultDeclaration', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "default">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'default'>>()
  })
})
