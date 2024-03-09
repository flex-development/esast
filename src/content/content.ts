/**
 * @file Content - Content
 * @module esast/content/Content
 */

import type { Heritage, Pattern, RootChild } from '@flex-development/esast'

/**
 * Union of registered content model nodes.
 */
type Content = Heritage | Pattern | RootChild

export type { Content as default }
