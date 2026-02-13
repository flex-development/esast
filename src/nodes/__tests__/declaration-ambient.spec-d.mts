/**
 * @file Type Tests - AmbientDeclaration
 * @module esast/nodes/tests/unit-d/AmbientDeclaration
 */

import type * as TestSubject from '#nodes/declaration-ambient'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/AmbientDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AmbientDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: AmbientDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "ambientDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'ambientDeclaration'>()
  })

  describe('AmbientDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
