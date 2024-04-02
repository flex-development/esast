/**
 * @file Type Definitions - AssignmentOperator
 * @module esast/types/AssignmentOperator
 */

/**
 * Assignment operators.
 *
 * An assignment operator assigns a value to its left operand based on the value
 * of its right operand.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#assignment_operators
 * @see https://tc39.es/ecma262/#sec-assignment-operators
 */
type AssignmentOperator =
  | '-='
  | '??='
  | '**='
  | '*='
  | '/='
  | '&&='
  | '&='
  | '%='
  | '^='
  | '+='
  | '<<='
  | '='
  | '>>='
  | '>>>='
  | '|='
  | '||='

export type { AssignmentOperator as default }
