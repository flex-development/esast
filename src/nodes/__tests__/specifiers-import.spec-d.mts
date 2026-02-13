/**
 * @file Type Tests - ImportSpecifiers
 * @module esast/nodes/tests/unit-d/ImportSpecifiers
 */

import type * as TestSubject from '#nodes/specifiers-import'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImportSpecifiers', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportSpecifiersData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImportSpecifiersData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importSpecifiers"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importSpecifiers'>()
  })

  describe('ImportSpecifiersData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
