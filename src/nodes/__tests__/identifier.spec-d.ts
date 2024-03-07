/**
 * @file Type Tests - Identifier
 * @module esast/nodes/tests/unit-d/Identifier
 */

import type { Data, Node } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../identifier'

describe('unit-d:nodes/Identifier', () => {
  type Identifier = TestSubject.default
  type IdentifierData = TestSubject.IdentifierData

  it('should extend Node', () => {
    expectTypeOf<Identifier>().toMatchTypeOf<Node>()
  })

  it('should match [data?: Optional<IdentifierData>]', () => {
    expectTypeOf<Identifier>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<IdentifierData>>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<Identifier>()
      .toHaveProperty('name')
      .toEqualTypeOf<string>()
  })

  it('should match [type: "identifier"]', () => {
    expectTypeOf<Identifier>()
      .toHaveProperty('type')
      .toEqualTypeOf<'identifier'>()
  })

  describe('IdentifierData', () => {
    it('should extend Data', () => {
      expectTypeOf<IdentifierData>().toMatchTypeOf<Data>()
    })

    it('should match [private?: Nilable<boolean>]', () => {
      expectTypeOf<IdentifierData>()
        .toHaveProperty('private')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
