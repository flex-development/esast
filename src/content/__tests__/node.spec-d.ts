/**
 * @file Type Tests - node
 * @module esast/content/tests/unit-d/node
 */

import type * as docast from '@flex-development/docast'
import type { Root } from '@flex-development/esast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'
import type * as TestSubject from '../node'

describe('unit-d:content/node', () => {
  describe('EsastNode', () => {
    it('should equal NodeMap[keyof NodeMap]', () => {
      expectTypeOf<TestSubject.EsastNode>()
        .toEqualTypeOf<TestSubject.NodeMap[keyof TestSubject.NodeMap]>
    })
  })

  describe('NodeMap', () => {
    type Skip = Exclude<InclusiveDescendant<docast.Comment>, docast.Comment>
    type Nodes = Exclude<InclusiveDescendant<Root>, Skip>

    it('should register all nodes', () => {
      // Arrange
      type Subject = TestSubject.NodeMap[keyof TestSubject.NodeMap]

      // Expect
      expectTypeOf<Exclude<Nodes, Subject>>().toEqualTypeOf<never>()
    })
  })
})
