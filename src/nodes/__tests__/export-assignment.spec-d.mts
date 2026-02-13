/**
 * @file Type Tests - ExportAssignment
 * @module esast/nodes/tests/unit-d/ExportAssignment
 */

import type * as TestSubject from '#nodes/export-assignment'
import type {
  ExportDeclaration,
  ExportKind
} from '@flex-development/esast'

describe('unit-d:nodes/ExportAssignment', () => {
  type Subject = TestSubject.default

  it('should extend ExportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ExportDeclaration>()
  })

  it('should match [kind: Extract<ExportKind, "assignment">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ExportKind, 'assignment'>>()
  })
})
