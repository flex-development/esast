/**
 * @file Type Tests - NamespaceImport
 * @module esast/nodes/tests/unit-d/NamespaceImport
 */

import type * as TestSubject from '#nodes/namespace-import'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/NamespaceImport', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NamespaceImportData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
