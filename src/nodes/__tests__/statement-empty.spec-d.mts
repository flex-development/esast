/**
 * @file Type Tests - EmptyStatement
 * @module esast/nodes/tests/unit-d/EmptyStatement
 */

import type * as TestSubject from '#nodes/statement-empty'
import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/EmptyStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EmptyStatementData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toExtend<Node>()
  })

  it('should match [data?: EmptyStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "emptyStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'emptyStatement'>()
  })

  describe('EmptyStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
