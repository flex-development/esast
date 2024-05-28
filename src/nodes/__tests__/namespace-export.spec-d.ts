/**
 * @file Type Tests - NamespaceExport
 * @module esast/nodes/tests/unit-d/NamespaceExport
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../namespace-export'

describe('unit-d:nodes/NamespaceExport', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NamespaceExportData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: NamespaceExportData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "namespaceExport"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'namespaceExport'>()
  })

  describe('NamespaceExportData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
