/**
 * @file Type Tests - moduleStatement
 * @module esast/content/tests/unit-d/moduleStatement
 */

import type * as TestSubject from '#content/statement-module'
import type NodeObject from '#tests/types/node-object'
import type {
  ExportDeclaration,
  ImportDeclaration
} from '@flex-development/esast'

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
        .toExtend<NodeObject<ExportDeclaration>>()
    })

    it('should match NodeObject<ImportDeclaration>', () => {
      expectTypeOf<TestSubject.ModuleStatementMap>()
        .toExtend<NodeObject<ImportDeclaration>>()
    })
  })
})
