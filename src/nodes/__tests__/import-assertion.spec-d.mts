/**
 * @file Type Tests - ImportAssertion
 * @module esast/nodes/tests/unit-d/ImportAssertion
 */

import type * as TestSubject from '#nodes/import-assertion'
import type {
  Data,
  ImportAssertionOperator,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImportAssertion', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportAssertionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImportAssertionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [operator: ImportAssertionOperator]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('operator')
      .toEqualTypeOf<ImportAssertionOperator>()
  })

  it('should match [type: "importAssertion"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importAssertion'>()
  })

  describe('ImportAssertionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
