/**
 * @file Type Tests - statement
 * @module esast/content/tests/unit-d/statement
 */

import type { NodeObject } from '#tests/types'
import type { BlockStatement, EmptyStatement } from '@flex-development/esast'
import type * as TestSubject from '../statement'

describe('unit-d:content/statement', () => {
  describe('Statement', () => {
    it('should equal StatementMap[keyof StatementMap]', () => {
      expectTypeOf<TestSubject.Statement>()
        .toEqualTypeOf<TestSubject.StatementMap[keyof TestSubject.StatementMap]>
    })
  })

  describe('StatementMap', () => {
    it('should match NodeObject<BlockStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<BlockStatement>>()
    })

    it('should match NodeObject<EmptyStatement>', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toMatchTypeOf<NodeObject<EmptyStatement>>()
    })
  })
})
