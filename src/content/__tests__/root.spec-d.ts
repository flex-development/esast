/**
 * @file Type Tests - root
 * @module esast/content/tests/unit-d/root
 */

import type { NodeObject } from '#tests/types'
import type {
  Comment,
  Decorator,
  Directive,
  ModuleDeclarationMap,
  StatementMap
} from '@flex-development/esast'
import type * as TestSubject from '../root'

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
    it('should extend ModuleDeclarationMap', () => {
      expectTypeOf<TestSubject.RootMap>().toMatchTypeOf<ModuleDeclarationMap>()
    })

    it('should extend StatementMap', () => {
      expectTypeOf<TestSubject.RootMap>().toMatchTypeOf<StatementMap>()
    })

    it('should match NodeObject<Comment>', () => {
      expectTypeOf<TestSubject.RootMap>().toMatchTypeOf<NodeObject<Comment>>()
    })

    it('should match NodeObject<Decorator>', () => {
      expectTypeOf<TestSubject.RootMap>().toMatchTypeOf<NodeObject<Decorator>>()
    })

    it('should match NodeObject<Directive>', () => {
      expectTypeOf<TestSubject.RootMap>().toMatchTypeOf<NodeObject<Directive>>()
    })
  })
})
