/**
 * @file Type Tests - NamespaceImport
 * @module esast/nodes/tests/unit-d/NamespaceImport
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../namespace-import'

describe('unit-d:nodes/NamespaceImport', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NamespaceImportData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: NamespaceImportData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "namespaceImport"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'namespaceImport'>()
  })

  describe('NamespaceImportData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
