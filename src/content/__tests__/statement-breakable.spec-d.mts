/**
 * @file Type Tests - breakableStatement
 * @module esast/content/tests/unit-d/breakableStatement
 */

import type * as TestSubject from '#content/statement-breakable'
import type NodeObject from '#tests/types/node-object'
import type {
  IterationStatementMap,
  SwitchStatement
} from '@flex-development/esast'

describe('unit-d:content/breakableStatement', () => {
  describe('BreakableStatement', () => {
    it('should equal BreakableStatementMap[keyof BreakableStatementMap]', () => {
      // Arrange
      type K = keyof TestSubject.BreakableStatementMap
      type Expect = TestSubject.BreakableStatementMap[K]

      // Expect
      expectTypeOf<TestSubject.BreakableStatement>().toEqualTypeOf<Expect>
    })
  })

  describe('BreakableStatementMap', () => {
    it('should extend IterationStatementMap', () => {
      expectTypeOf<TestSubject.BreakableStatementMap>().toExtend<
        IterationStatementMap
      >()
    })

    it('should match NodeObject<SwitchStatement>', () => {
      expectTypeOf<TestSubject.BreakableStatementMap>()
        .toExtend<NodeObject<SwitchStatement>>()
    })
  })
})
