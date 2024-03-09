/**
 * @file Type Tests - LabeledStatement
 * @module esast/nodes/tests/unit-d/LabeledStatement
 */

import type {
  Data,
  Identifier,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-labeled'

describe('unit-d:nodes/LabeledStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.LabeledStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Identifier, Statement]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Identifier, Statement]>()
  })

  it('should match [data?: Optional<LabeledStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "labeledStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'labeledStatement'>()
  })

  describe('LabeledStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
