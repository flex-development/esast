/**
 * @file Nodes - EnumMember
 * @module esast/nodes/EnumMember
 */

import type {
  Comments,
  Data,
  Expression,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'

/**
 * Info associated with `enum` members.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface EnumMemberData extends Data {}

/**
 * An `enum` member.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface EnumMember extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      name: Identifier | StringLiteral,
      ...comments: Comments,
      expression: Expression
    ]
    | [name: Identifier | StringLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode EnumMemberData}
   */
  data?: EnumMemberData | undefined

  /**
   * Node type.
   */
  type: 'enumMember'
}

export type { EnumMemberData, EnumMember as default }
