/**
 * @file Internal - InternalComments
 * @module esast/internal/InternalComments
 */

import type { Comment, Comments } from '@flex-development/esast'
import type { EmptyArray } from '@flex-development/tutils'

/**
 * Create a {@linkcode Comment} tuple union.
 *
 * > **Note**: This type should be used to represent comments that can occur
 * > **before** [*child*][1] nodes. It need not be used if a [*parent*][2] can
 * > only have one (`1`) non-comment child, or if the parent can only have two
 * > non-comment [*children*][2], and comments can **only occur between them**.
 * > In such cases, {@linkcode Comments} should be used instead.
 * >
 * > This type is needed because TypeScript cannot accurately represent a fixed
 * > minimum number of children, where `0...n` comments can occur before each
 * > child. {@linkcode Comments} cannot be used in these cases because spreading
 * > the type between each child corrupts the property signature for `children`
 * > by allowing more non-comment nodes than originally specified. The spreads
 * > work as expected when the **length of each spread array is a literal**
 * > (i.e. `0`, `1`, `2`, `3`). {@linkcode Comments} can also be used exactly
 * > once in these instances.
 * >
 * > For performance reasons, the only type constituents of this union are an
 * > empty array, and a tuple of length one (`1`). A utility function or type
 * > assertion may be needed when constructing *children* of a node that uses
 * > this type.
 * >
 * > See [`microsoft/TypeScript#57182`][3] for more details.
 *
 * [1]: https://github.com/syntax-tree/unist#child
 * [2]: https://github.com/syntax-tree/unist#parent-1
 * [3]: https://github.com/microsoft/TypeScript/issues/57182#issuecomment-1998539210
 *
 * @internal
 *
 * @see https://github.com/microsoft/TypeScript/issues/57182
 */
type InternalComments = EmptyArray | [Comment]

export type { InternalComments as default }
