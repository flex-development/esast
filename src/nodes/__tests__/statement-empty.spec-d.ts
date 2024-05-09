/**
 * @file Type Tests - EmptyStatement
 * @module esast/nodes/tests/unit-d/EmptyStatement
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-empty'

describe('unit-d:nodes/EmptyStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EmptyStatementData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
