/**
 * @file Type Tests - ExportNamedDeclaration
 * @module esast/nodes/tests/unit-d/ExportNamedDeclaration
 */

import type {
  Data,
  Declaration,
  ExportSpecifiers,
  Nothing,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-export-named'

describe('unit-d:nodes/ExportNamedDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportNamedDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Declaration | Nothing, ExportSpecifiers, StringLiteral] | [Declaration | Nothing, ExportSpecifiers]]', () => {
    // Arrange
    type Expect =
      | [Declaration | Nothing, ExportSpecifiers, StringLiteral]
      | [Declaration | Nothing, ExportSpecifiers]

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
