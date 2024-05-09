/**
 * @file Type Tests - MethodDefinition
 * @module esast/nodes/tests/unit-d/MethodDefinition
 */

import type { Data, MethodKind, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../definition-method'

describe('unit-d:nodes/MethodDefinition', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MethodDefinitionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [computed: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('computed').toEqualTypeOf<boolean>()
  })

  it('should match [data?: MethodDefinitionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: MethodKind]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<MethodKind>()
  })

  it('should match [static: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('static').toEqualTypeOf<boolean>()
  })

  it('should match [type: "methodDefinition"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'methodDefinition'>()
  })

  describe('MethodDefinitionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
