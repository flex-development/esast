/**
 * @file Type Tests - breakableStatement
 * @module esast/content/tests/unit-d/breakableStatement
 */

import type { NodeObject } from '#tests/types'
import type {
  IterationStatementMap,
  SwitchStatement
} from '@flex-development/esast'
import type * as TestSubject from '../statement-breakable'

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
      expectTypeOf<TestSubject.BreakableStatementMap>().toMatchTypeOf<
        IterationStatementMap
      >()
    })

    it('should match NodeObject<SwitchStatement>', () => {
      expectTypeOf<TestSubject.BreakableStatementMap>()
        .toMatchTypeOf<NodeObject<SwitchStatement>>()
    })
  })
})
