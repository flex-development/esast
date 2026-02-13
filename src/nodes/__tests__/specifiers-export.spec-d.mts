/**
 * @file Type Tests - ExportSpecifiers
 * @module esast/nodes/tests/unit-d/ExportSpecifiers
 */

import type * as TestSubject from '#nodes/specifiers-export'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ExportSpecifiers', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportSpecifiersData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ExportSpecifiersData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "exportSpecifiers"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportSpecifiers'>()
  })

  describe('ExportSpecifiersData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
