/**
 * @file Type Tests - ExportAssignment
 * @module esast/nodes/tests/unit-d/ExportAssignment
 */

import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'
import type * as TestSubject from '../export-assignment'

describe('unit-d:nodes/ExportAssignment', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "assignment">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'assignment'>>()
  })
})
