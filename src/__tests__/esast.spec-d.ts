/**
 * @file Type Tests - esast
 * @module esast/nodes/tests/unit-d/esast
 */

import type * as docast from '@flex-development/docast'
import type * as TestSubject from '@flex-development/esast'
import type { Children, Parents } from '@flex-development/unist-util-types'
import type * as mdast from 'mdast'

describe('unit-d:esast', () => {
  describe('Extract<AnyParent, EsastNode>', () => {
    type Subject = Extract<TestSubject.AnyParent, TestSubject.EsastNode>

    it('should override Parent["children"]', () => {
      // Arrange
      type Helper<T extends unknown[]> = T extends Children<TestSubject.Parent>
        ? Children<TestSubject.Parent> extends T ? 0 : 1
        : unknown

      // Expect
      expectTypeOf<Helper<Children<Subject>>>().toEqualTypeOf<1>()
    })
  })

  describe('Parents<Root, Comment>', () => {
    type Subject = Parents<TestSubject.Root, TestSubject.Comment>

    it('should include all Comment parents', () => {
      // Arrange
      type Expect = Exclude<
        TestSubject.AnyParent,
        | docast.DocastNode
        | mdast.Nodes
        | TestSubject.Comment
        | TestSubject.ExpressionStatement
        | TestSubject.MethodProperty
        | TestSubject.TemplateLiteral
      >

      // Expect
      expectTypeOf<Subject>().toEqualTypeOf<Expect>()
    })

    it('should not include Comment', () => {
      expectTypeOf<Subject>().extract<TestSubject.Comment>().toBeNever()
    })

    it('should not include ExpressionStatement', () => {
      expectTypeOf<Subject>()
        .extract<TestSubject.ExpressionStatement>()
        .toBeNever()
    })

    it('should not include MethodProperty', () => {
      expectTypeOf<Subject>()
        .extract<TestSubject.MethodProperty>()
        .toBeNever()
    })

    it('should not include TemplateLiteral', () => {
      expectTypeOf<Subject>()
        .extract<TestSubject.TemplateLiteral>()
        .toBeNever()
    })
  })
})
