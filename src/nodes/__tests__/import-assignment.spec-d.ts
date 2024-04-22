/**
 * @file Type Tests - ImportAssignment
 * @module esast/nodes/tests/unit-d/ImportAssignment
 */

import type {
  ImportDeclaration,
  ImportKind
} from '@flex-development/esast'
import type * as TestSubject from '../import-assignment'

describe('unit-d:nodes/ImportAssignment', () => {
  type Subject = TestSubject.default

  it('should extend ImportDeclaration', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ImportDeclaration>()
  })

  it('should match [kind: Extract<ImportKind, "assignment">]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<Extract<ImportKind, 'assignment'>>()
  })
})
