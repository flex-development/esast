/**
 * @file Type Tests - ImportAssignment
 * @module esast/nodes/tests/unit-d/ImportAssignment
 */

import type * as TestSubject from '#nodes/import-assignment'
import type {
  ImportDeclaration,
  ImportKind
} from '@flex-development/esast'

describe('unit-d:nodes/ImportAssignment', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toExtend<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "assignment">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'assignment'>>()
  })
})
