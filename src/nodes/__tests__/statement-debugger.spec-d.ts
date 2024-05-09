/**
 * @file Type Tests - DebuggerStatement
 * @module esast/nodes/tests/unit-d/DebuggerStatement
 */

import type { Data, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-debugger'

describe('unit-d:nodes/DebuggerStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DebuggerStatementData

  it('should extend Node', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Node>()
  })

  it('should match [data?: DebuggerStatementData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "debuggerStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'debuggerStatement'>()
  })

  describe('DebuggerStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
