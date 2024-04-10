/**
 * @file Type Tests - typeDeclaration
 * @module esast/content/tests/unit-d/typeDeclaration
 */

import type { NodeObject } from '#tests/types'
import type {
  EnumDeclaration,
  FunctionSignature,
  InterfaceDeclaration,
  ModuleDeclaration,
  NamespaceDeclaration,
  TypeAliasDeclaration
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-type'

describe('unit-d:content/typeDeclaration', () => {
  describe('TypeDeclarationMap', () => {
    it('should equal TypeDeclarationMap[keyof TypeDeclarationMap]', () => {
      // Arrange
      type K = keyof TestSubject.TypeDeclarationMap
      type Expect = TestSubject.TypeDeclarationMap[K]

      // Expect
      expectTypeOf<TestSubject.TypeDeclaration>().toEqualTypeOf<Expect>
    })
  })

  describe('TypeDeclarationMap', () => {
    it('should match NodeObject<EnumDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toMatchTypeOf<NodeObject<EnumDeclaration>>()
    })

    it('should match NodeObject<FunctionSignature>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toMatchTypeOf<NodeObject<FunctionSignature>>()
    })

    it('should match NodeObject<InterfaceDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toMatchTypeOf<NodeObject<InterfaceDeclaration>>()
    })

    it('should match NodeObject<ModuleDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toMatchTypeOf<NodeObject<ModuleDeclaration>>()
    })

    it('should match NodeObject<NamespaceDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toMatchTypeOf<NodeObject<NamespaceDeclaration>>()
    })

    it('should match NodeObject<TypeAliasDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toMatchTypeOf<NodeObject<TypeAliasDeclaration>>()
    })
  })
})
