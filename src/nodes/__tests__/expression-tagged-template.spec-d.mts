/**
 * @file Type Tests - TaggedTemplateExpression
 * @module esast/nodes/tests/unit-d/TaggedTemplateExpression
 */

import type * as TestSubject from '#nodes/expression-tagged-template'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TaggedTemplateExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TaggedTemplateExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TaggedTemplateExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "taggedTemplateExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'taggedTemplateExpression'>()
  })

  describe('TaggedTemplateExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
