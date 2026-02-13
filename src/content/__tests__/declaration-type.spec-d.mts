/**
 * @file Type Tests - typeDeclaration
 * @module esast/content/tests/unit-d/typeDeclaration
 */

import type * as TestSubject from '#content/declaration-type'
import type NodeObject from '#tests/types/node-object'
import type {
  AmbientDeclaration,
  EnumDeclaration,
  FunctionSignature,
  InterfaceDeclaration,
  ModuleDeclaration,
  NamespaceDeclaration,
  TypeAliasDeclaration
} from '@flex-development/esast'

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
    it('should match NodeObject<AmbientDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<AmbientDeclaration>>()
    })

    it('should match NodeObject<EnumDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<EnumDeclaration>>()
    })

    it('should match NodeObject<FunctionSignature>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<FunctionSignature>>()
    })

    it('should match NodeObject<InterfaceDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<InterfaceDeclaration>>()
    })

    it('should match NodeObject<ModuleDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<ModuleDeclaration>>()
    })

    it('should match NodeObject<NamespaceDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<NamespaceDeclaration>>()
    })

    it('should match NodeObject<TypeAliasDeclaration>', () => {
      expectTypeOf<TestSubject.TypeDeclarationMap>()
        .toExtend<NodeObject<TypeAliasDeclaration>>()
    })
  })
})
