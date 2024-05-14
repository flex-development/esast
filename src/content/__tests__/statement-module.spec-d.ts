/**
 * @file Type Tests - moduleStatement
 * @module esast/content/tests/unit-d/moduleStatement
 */

import type { NodeObject } from '#tests/types'
import type {
  ExportDeclaration,
  ImportDeclaration
} from '@flex-development/esast'
import type * as TestSubject from '../statement-module'

describe('unit-d:content/moduleStatement', () => {
  describe('ModuleStatement', () => {
    it('should equal ModuleStatementMap[keyof ModuleStatementMap]', () => {
      // Arrange
      type K = keyof TestSubject.ModuleStatementMap
      type Expect = TestSubject.ModuleStatementMap[K]

      // Expect
      expectTypeOf<TestSubject.ModuleStatement>().toEqualTypeOf<Expect>
    })
  })

  describe('ModuleStatementMap', () => {
    it('should match NodeObject<ExportDeclaration>', () => {
      expectTypeOf<TestSubject.ModuleStatementMap>()
        .toMatchTypeOf<NodeObject<ExportDeclaration>>()
    })

    it('should match NodeObject<ImportDeclaration>', () => {
      expectTypeOf<TestSubject.ModuleStatementMap>()
        .toMatchTypeOf<NodeObject<ImportDeclaration>>()
    })
  })
})
