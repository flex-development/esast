/**
 * @file Type Tests - moduleDeclaration
 * @module esast/content/tests/unit-d/moduleDeclaration
 */

import type { ExportDeclarationMap } from '@flex-development/esast'
import type * as TestSubject from '../declaration-module'

describe('unit-d:content/moduleDeclaration', () => {
  describe('ModuleDeclaration', () => {
    it('should equal ModuleDeclarationMap[keyof ModuleDeclarationMap]', () => {
      // Arrange
      type K = keyof TestSubject.ModuleDeclarationMap
      type Expect = TestSubject.ModuleDeclarationMap[K]

      // Expect
      expectTypeOf<TestSubject.ModuleDeclaration>().toEqualTypeOf<Expect>
    })
  })

  describe('ModuleDeclarationMap', () => {
    it('should extend ExportDeclarationMap', () => {
      expectTypeOf<TestSubject.ModuleDeclarationMap>()
        .toMatchTypeOf<ExportDeclarationMap>()
    })
  })
})
