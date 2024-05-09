/**
 * @file Type Tests - Root
 * @module esast/nodes/tests/unit-d/Root
 */

import type {
  Data,
  EcmaVersion,
  Parent,
  SourceMode
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../root'

describe('unit-d:nodes/Root', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.RootData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: RootData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "root"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'root'>()
  })

  describe('RootData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [ecmaVersion?: EcmaVersion | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('ecmaVersion')
        .toEqualTypeOf<Nilable<EcmaVersion>>()
    })

    it('should match [mode?: SourceMode | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('mode')
        .toEqualTypeOf<Nilable<SourceMode>>()
    })
  })
})
