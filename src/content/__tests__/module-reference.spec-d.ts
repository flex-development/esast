/**
 * @file Type Tests - moduleReference
 * @module esast/content/tests/unit-d/moduleReference
 */

import type { NodeObject } from '#tests/types'
import type {
  ExportDeclaration,
  ImportDeclaration
} from '@flex-development/esast'
import type * as TestSubject from '../module-reference'

describe('unit-d:content/moduleReference', () => {
  describe('ModuleReference', () => {
    it('should equal ModuleReferenceMap[keyof ModuleReferenceMap]', () => {
      // Arrange
      type K = keyof TestSubject.ModuleReferenceMap
      type Expect = TestSubject.ModuleReferenceMap[K]

      // Expect
      expectTypeOf<TestSubject.ModuleReference>().toEqualTypeOf<Expect>
    })
  })

  describe('ModuleReferenceMap', () => {
    it('should match NodeObject<ExportDeclaration>', () => {
      expectTypeOf<TestSubject.ModuleReferenceMap>()
        .toMatchTypeOf<NodeObject<ExportDeclaration>>()
    })

    it('should match NodeObject<ImportDeclaration>', () => {
      expectTypeOf<TestSubject.ModuleReferenceMap>()
        .toMatchTypeOf<NodeObject<ImportDeclaration>>()
    })
  })
})
