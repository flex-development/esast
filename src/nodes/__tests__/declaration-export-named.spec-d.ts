/**
 * @file Type Tests - ExportNamedDeclaration
 * @module esast/nodes/tests/unit-d/ExportNamedDeclaration
 */

import type {
  Data,
  Declaration,
  ExportSpecifiers,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-export-named'

describe('unit-d:nodes/ExportNamedDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportNamedDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Nullable<Declaration>, ExportSpecifiers, StringLiteral] | [Nullable<Declaration>, ExportSpecifiers]]', () => {
    // Arrange
    type Expect =
      | [Nullable<Declaration>, ExportSpecifiers, StringLiteral]
      | [Nullable<Declaration>, ExportSpecifiers]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<ExportNamedDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "exportNamedDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportNamedDeclaration'>()
  })

  describe('ExportNamedDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
