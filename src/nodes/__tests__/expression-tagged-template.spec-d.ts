/**
 * @file Type Tests - TaggedTemplateExpression
 * @module esast/nodes/tests/unit-d/TaggedTemplateExpression
 */

import type {
  Data,
  Expression,
  Parent,
  TemplateLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-tagged-template'

describe('unit-d:nodes/TaggedTemplateExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TaggedTemplateExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression, TemplateLiteral]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression, TemplateLiteral]>()
  })

  it('should match [data?: Optional<TaggedTemplateExpressionData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
