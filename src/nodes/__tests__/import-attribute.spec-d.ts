/**
 * @file Type Tests - ImportAttribute
 * @module esast/nodes/tests/unit-d/ImportAttribute
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../import-attribute'

describe('unit-d:nodes/ImportAttribute', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportAttributeData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ImportAttributeData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
