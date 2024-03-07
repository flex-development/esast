/**
 * @file Type Tests - statement
 * @module esast/content/tests/unit-d/statement
 */

import type { EmptyStatement } from '@flex-development/esast'
import type * as TestSubject from '../statement'

describe('unit-d:content/statement', () => {
  describe('Statement', () => {
    it('should equal StatementMap[keyof StatementMap]', () => {
      expectTypeOf<TestSubject.Statement>()
        .toEqualTypeOf<TestSubject.StatementMap[keyof TestSubject.StatementMap]>
    })
  })

  describe('StatementMap', () => {
    it('should match [emptyStatement: EmptyStatement]', () => {
      expectTypeOf<TestSubject.StatementMap>()
        .toHaveProperty('emptyStatement')
        .toEqualTypeOf<EmptyStatement>
    })
  })
})
