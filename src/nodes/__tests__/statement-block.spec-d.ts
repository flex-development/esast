/**
 * @file Type Tests - BlockStatement
 * @module esast/nodes/tests/unit-d/BlockStatement
 */

import type { Data, Parent, Statement } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-block'

describe('unit-d:nodes/BlockStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.BlockStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: Statement[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Statement[]>()
  })

  it('should match [data?: Optional<BlockStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "blockStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'blockStatement'>()
  })

  describe('BlockStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [static?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('static')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
