/**
 * @file Type Tests - ImportAttribute
 * @module esast/nodes/tests/unit-d/ImportAttribute
 */

import type * as TestSubject from '#nodes/import-attribute'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImportAttribute', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportAttributeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImportAttributeData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importAttribute"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importAttribute'>()
  })

  describe('ImportAttributeData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
