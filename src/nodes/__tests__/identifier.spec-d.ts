/**
 * @file Type Tests - Identifier
 * @module esast/nodes/tests/unit-d/Identifier
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../identifier'

describe('unit-d:nodes/Identifier', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IdentifierData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
  })

  it('should match [data?: IdentifierData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('name').toEqualTypeOf<string>()
  })

  it('should match [private: boolean]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('private')
      .toEqualTypeOf<boolean>()
  })

  it('should match [type: "identifier"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'identifier'>()
  })

  describe('IdentifierData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
