/**
 * @file Type Aliases - AnyClass
 * @module esast/types/AnyClass
 */

import type { ClassDeclaration, ClassExpression } from '@flex-development/esast'

/**
 * A `class` declaration or expression.
 *
 * @see {@linkcode ClassExpression}
 * @see {@linkcode ClassDeclaration}
 */
type AnyClass = ClassDeclaration | ClassExpression

export type { AnyClass as default }
