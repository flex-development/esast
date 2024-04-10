/**
 * @file Type Tests - NamespaceDeclaration
 * @module esast/nodes/tests/unit-d/NamespaceDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-namespace'

describe('unit-d:nodes/NamespaceDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.NamespaceDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<NamespaceDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "namespaceDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'namespaceDeclaration'>()
  })

  describe('NamespaceDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
