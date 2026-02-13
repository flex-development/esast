/**
 * @file Type Tests - Node
 * @module esast/nodes/tests/unit-d/Node
 */

import type TestSubject from '#nodes/node'
import type { Data } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type unist from 'unist'

describe('unit-d:nodes/Node', () => {
  it('should extend unist.Node', () => {
    expectTypeOf<TestSubject>().toExtend<unist.Node>()
  })

  it('should match [data?: Data | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<Data>>()
  })
})
