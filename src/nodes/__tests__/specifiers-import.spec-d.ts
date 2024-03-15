/**
 * @file Type Tests - ImportSpecifiers
 * @module esast/nodes/tests/unit-d/ImportSpecifiers
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../specifiers-import'

describe('unit-d:nodes/ImportSpecifiers', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportSpecifiersData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ImportSpecifiersData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
