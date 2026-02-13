/**
 * @file Type Tests - declaration
 * @module esast/content/tests/unit-d/declaration
 */

import type * as TestSubject from '#content/declaration'
import type NodeObject from '#tests/types/node-object'
import type {
  ClassDeclaration,
  FunctionDeclaration,
  ModuleDeclaration,
  TypeDeclarationMap,
  VariableDeclaration
} from '@flex-development/esast'

describe('unit-d:content/declaration', () => {
  describe('Declaration', () => {
    it('should equal DeclarationMap[keyof DeclarationMap]', () => {
      // Arrange
      type K = keyof TestSubject.DeclarationMap
      type Expect = TestSubject.DeclarationMap[K]

      // Expect
      expectTypeOf<TestSubject.Declaration>().toEqualTypeOf<Expect>
    })
  })

  describe('DeclarationMap', () => {
    it('should extend TypeDeclarationMap', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toExtend<TypeDeclarationMap>()
    })

    it('should match NodeObject<ClassDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toExtend<NodeObject<ClassDeclaration>>()
    })

    it('should match NodeObject<FunctionDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toExtend<NodeObject<FunctionDeclaration>>()
    })

    it('should match NodeObject<ModuleDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toExtend<NodeObject<ModuleDeclaration>>()
    })

    it('should match NodeObject<VariableDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toExtend<NodeObject<VariableDeclaration>>()
    })
  })
})
