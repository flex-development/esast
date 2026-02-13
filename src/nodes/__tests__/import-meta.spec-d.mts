/**
 * @file Type Tests - ImportMeta
 * @module esast/nodes/tests/unit-d/ImportMeta
 */

import type * as TestSubject from '#nodes/import-meta'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImportMeta', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportMetaData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImportMetaData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importMeta"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'importMeta'>()
  })

  describe('ImportMetaData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
