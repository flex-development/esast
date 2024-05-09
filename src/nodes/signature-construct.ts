/**
 * @file Nodes - ConstructSignature
 * @module esast/nodes/ConstructSignature
 */

import type {
  CallSignature,
  Comments,
  Data,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with construct signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConstructSignatureData extends Data {}

/**
 * A construct signature.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures
 *
 * @extends {Parent}
 */
interface ConstructSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallSignature}
   * @see {@linkcode Comments}
   */
  children: [...comments: Comments, call: CallSignature]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConstructSignatureData}
   */
  data?: ConstructSignatureData | undefined

  /**
   * Node type.
   */
  type: 'constructSignature'
}

export type { ConstructSignatureData, ConstructSignature as default }
