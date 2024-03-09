/**
 * @file Type Tests - exportDeclaration
 * @module esast/content/tests/unit-d/exportDeclaration
 */

import type { NodeObject } from '#tests/types'
import type {
  ExportAllDeclaration,
  ExportDefaultDeclaration,
  ExportNamedDeclaration
} from '@flex-development/esast'
import type * as TestSubject from '../declaration-export'

describe('unit-d:content/exportDeclaration', () => {
  describe('ExportDeclaration', () => {
    it('should equal ExportDeclarationMap[keyof ExportDeclarationMap]', () => {
      // Arrange
      type K = keyof TestSubject.ExportDeclarationMap
      type Expect = TestSubject.ExportDeclarationMap[K]

      // Expect
      expectTypeOf<TestSubject.ExportDeclaration>().toEqualTypeOf<Expect>
    })
  })

  describe('ExportDeclarationMap', () => {
    it('should match NodeObject<ExportAllDeclaration>', () => {
      expectTypeOf<TestSubject.ExportDeclarationMap>()
        .toMatchTypeOf<NodeObject<ExportAllDeclaration>>()
    })

    it('should match NodeObject<ExportDefaultDeclaration>', () => {
      expectTypeOf<TestSubject.ExportDeclarationMap>()
        .toMatchTypeOf<NodeObject<ExportDefaultDeclaration>>()
    })

    it('should match NodeObject<ExportNamedDeclaration>', () => {
      expectTypeOf<TestSubject.ExportDeclarationMap>()
        .toMatchTypeOf<NodeObject<ExportNamedDeclaration>>()
    })
  })
})
