# esast

[![github release](https://img.shields.io/github/v/release/flex-development/esast.svg?include_prereleases&sort=semver)](https://github.com/flex-development/esast/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/esast.svg)](https://npmjs.com/package/@flex-development/esast)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/esast.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

**E**CMA**S**cript **A**bstract **S**yntax **T**ree format.

---

**esast** is a specification for representing [JavaScript][javascript] as an [abstract syntax tree][unist-syntax-tree].

It implements the [**unist**][unist] spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
  - [ESTree](#estree)
- [Types](#types)
- [Nodes (abstract)](#nodes-abstract)
  - [`Node`](#node)
  - [`Literal`](#literal)
  - [`Parent`](#parent)
- [Nodes](#nodes)
- [Glossary](#glossary)
- [List of utilities](#list-of-utilities)
- [Contribute](#contribute)

## Introduction

This document defines a format for representing ECMAScript as an [abstract syntax tree][unist-syntax-tree]. Development
of esast started in March 2024. This specification is written in a [TypeScript][typescript]-like grammar.

### Where this specification fits

esast extends [unist][unist], a format for syntax trees, to benefit from its [ecosystem of utilities][unist-utilities].

esast relates to [ESTree][estree] in that the first is inspired by the latter; an esast is a unist-flavored estree.

esast relates to [JavaScript][javascript] in that it represents it, but esast is not limited to JavaScript and can be
extended to support other JavaScript-based languages, like [TypeScript][typescript].

### ESTree

**TODO**: estree differences

## Types

TypeScript users can integrate `esast` type definitions into their project by installing the appropriate packages:

```sh
yarn add @flex-development/esast @flex-development/docast @types/mdast @types/unist
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

## Nodes (abstract)

### `Node`

```ts
interface Node extends unist.Node {}
```

**Node** ([**unist.Node**][unist-node]) is a syntactic unit in esast syntax trees.

### `Literal`

```ts
interface Literal extends Node {
  value: RegExp | bigint | boolean | number | string | null | undefined
}
```

**Literal** represents an abstract interface in esast containing a value.

Its `value` field is one of the following:

- a regular expression (`RegExp`)
- a `bigint` primitive
- a `boolean`
- a `number`
- a `string`
- `null`
- `undefined`

### `Parent`

```ts
interface Parent extends Node {
  children: (Node | null | undefined)[]
}
```

**Parent** represents an abstract interface in esast containing other nodes (said to be [*children*][unist-child]).

The `children` field is a list representing the children of a node. The value `null` is used as a placeholder for
parents with a fixed number of children. When using TypeScript plugins and utilities, `undefined` allows for optional
child nodes.

## Nodes

**TODO**: nodes

This specification is a work in progess. Please refer to the [source code](src/nodes/) for preliminary documentation.

## Glossary

See the [unist glossary][unist-glossary].

## List of utilities

See the [unist list of utilities][unist-utilities] for more utilities.

- [`estree-util-is-identifier-name`][estree-util-is-identifier-name] &mdash; check if something can be an identifier name

## Related

- [`docast`][docast] &mdash; docblock abstract syntax tree format
- [`mdast`][mdast] &mdash; markdown abstract syntax tree format

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

Ideas for new utilities and tools can be posted in [esast/ideas][esast-ideas].

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[docast]: https://github.com/flex-development/docast
[esast-ideas]: https://github.com/flex-development/esast/discussions/new?category=idea

<!-- [esast-util-attach-comments]: https://github.com/flex-development/esast-util-attach-comments -->
<!-- [esast-util-from-estree]: https://github.com/flex-development/esast-util-from-estree -->
<!-- [esast-util-from-js]: https://github.com/flex-development/esast-util-from-js -->
<!-- [esast-util-from-value]: https://github.com/flex-development/esast-util-from-value -->
<!-- [esast-util-to-estree]: https://github.com/flex-development/esast-util-to-estree -->
<!-- [esast-util-to-js]: https://github.com/flex-development/esast-util-to-js -->

[estree-util-is-identifier-name]: https://github.com/syntax-tree/estree-util-is-identifier-name
[estree]: https://github.com/estree/estree
[javascript]: https://tc39.es/ecma262
[mdast]: https://github.com/syntax-tree/mdast
[typescript]: https://typescriptlang.org
[unist-child]: https://github.com/syntax-tree/unist#child
[unist-glossary]: https://github.com/syntax-tree/unist#glossary
[unist-node]: https://github.com/syntax-tree/unist#node

<!-- [unist-root]: https://github.com/syntax-tree/unist#root -->

[unist-syntax-tree]: https://github.com/syntax-tree/unist#syntax-tree

<!-- [unist-tree]: https://github.com/syntax-tree/unist#tree -->

[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[unist]: https://github.com/syntax-tree/unist
