/**
 * @file Type Tests - ImportExpression
 * @module esast/nodes/tests/unit-d/ImportExpression
 */

import type * as TestSubject from '#nodes/expression-import'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImportExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImportExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importExpression'>()
  })

  describe('ImportExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
