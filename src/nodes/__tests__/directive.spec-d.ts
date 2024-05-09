/**
 * @file Type Tests - Directive
 * @module esast/nodes/tests/unit-d/Directive
 */

import type { Data, Literal } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../directive'

describe('unit-d:nodes/Directive', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DirectiveData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [data?: DirectiveData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "directive"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'directive'>()
  })

  it('should match [value: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('value').toEqualTypeOf<string>()
  })

  describe('DirectiveData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
