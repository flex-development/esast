/**
 * @file Type Tests - ImportAttributeClause
 * @module esast/nodes/tests/unit-d/ImportAttributeClause
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../import-attribute-clause'

describe('unit-d:nodes/ImportAttributeClause', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportAttributeClauseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ImportAttributeClauseData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importAttributeClause"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importAttributeClause'>()
  })

  describe('ImportAttributeClauseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
