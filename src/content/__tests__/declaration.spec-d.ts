/**
 * @file Type Tests - declaration
 * @module esast/content/tests/unit-d/declaration
 */

import type { NodeObject } from '#tests/types'
import type {
  ClassDeclaration,
  FunctionDeclaration,
  ModuleDeclaration,
  TypeDeclarationMap,
  VariableDeclaration
} from '@flex-development/esast'
import type * as TestSubject from '../declaration'

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
        .toMatchTypeOf<TypeDeclarationMap>()
    })

    it('should match NodeObject<ClassDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toMatchTypeOf<NodeObject<ClassDeclaration>>()
    })

    it('should match NodeObject<FunctionDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toMatchTypeOf<NodeObject<FunctionDeclaration>>()
    })

    it('should match NodeObject<ModuleDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toMatchTypeOf<NodeObject<ModuleDeclaration>>()
    })

    it('should match NodeObject<VariableDeclaration>', () => {
      expectTypeOf<TestSubject.DeclarationMap>()
        .toMatchTypeOf<NodeObject<VariableDeclaration>>()
    })
  })
})
