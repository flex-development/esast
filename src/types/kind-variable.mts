/**
 * @file Type Aliases - VariableKind
 * @module esast/types/VariableKind
 */

/**
 * Variable declaration kinds.
 *
 * @see https://github.com/tc39/proposal-explicit-resource-management
 */
type VariableKind = 'await using' | 'const' | 'let' | 'using' | 'var'

export type { VariableKind as default }
