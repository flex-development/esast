/**
 * @file Type Tests - ImportDeclaration
 * @module esast/nodes/tests/unit-d/ImportDeclaration
 */

import type {
  Data,
  ImportSpecifiers,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-import'

describe('unit-d:nodes/ImportDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [ImportSpecifiers, StringLiteral]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[ImportSpecifiers, StringLiteral]>()
  })

  it('should match [data?: Optional<ImportDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importDeclaration'>()
  })

  describe('ImportDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
