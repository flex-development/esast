/**
 * @file Type Tests - InterfaceDeclaration
 * @module esast/nodes/tests/unit-d/InterfaceDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-interface'

describe('unit-d:nodes/InterfaceDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.InterfaceDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: InterfaceDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "interfaceDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'interfaceDeclaration'>()
  })

  describe('InterfaceDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
