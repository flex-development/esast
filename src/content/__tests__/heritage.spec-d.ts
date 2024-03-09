/**
 * @file Type Tests - heritage
 * @module esast/content/tests/unit-d/heritage
 */

import type { ExpressionMap } from '@flex-development/esast'
import type * as TestSubject from '../heritage'

describe('unit-d:content/heritage', () => {
  describe('Heritage', () => {
    it('should equal HeritageMap[keyof HeritageMap]', () => {
      // Arrange
      type Expect = TestSubject.HeritageMap[keyof TestSubject.HeritageMap]

      // Expect
      expectTypeOf<TestSubject.Heritage>().toEqualTypeOf<Expect>
    })
  })

  describe('HeritageMap', () => {
    it('should extend ExpressionMap', () => {
      expectTypeOf<TestSubject.HeritageMap>().toMatchTypeOf<ExpressionMap>()
    })
  })
})
