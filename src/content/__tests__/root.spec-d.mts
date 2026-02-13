/**
 * @file Type Tests - root
 * @module esast/content/tests/unit-d/root
 */

import type * as TestSubject from '#content/root'
import type NodeObject from '#tests/types/node-object'
import type {
  Comment,
  Decorator,
  Directive,
  StatementMap
} from '@flex-development/esast'

describe('unit-d:content/root', () => {
  describe('RootChild', () => {
    it('should equal RootMap[keyof RootMap]', () => {
      // Arrange
      type Expect = TestSubject.RootMap[keyof TestSubject.RootMap]

      // Expect
      expectTypeOf<TestSubject.RootChild>().toEqualTypeOf<Expect>
    })
  })

  describe('RootMap', () => {
    it('should extend StatementMap', () => {
      expectTypeOf<TestSubject.RootMap>().toExtend<StatementMap>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.RootMap>().toExtend<NodeObject<Comment>>()
    })

    it('should match NodeObject<Decorator>', () => {
      expectTypeOf<TestSubject.RootMap>().toExtend<NodeObject<Decorator>>()
    })

    it('should match NodeObject<Directive>', () => {
      expectTypeOf<TestSubject.RootMap>().toExtend<NodeObject<Directive>>()
    })
  })
})
