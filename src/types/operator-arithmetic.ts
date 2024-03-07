/**
 * @file Type Definitions - ArithmeticOperator
 * @module esast/types/ArithmeticOperator
 */

/**
 * Arithmetic operators.
 *
 * Arithmetic operators take numerical values (either literals or variables) as
 * their operands and return a single numerical value.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#arithmetic_operators
 */
type ArithmeticOperator = '-' | '*' | '**' | '/' | '%' | '+'

export type { ArithmeticOperator as default }
