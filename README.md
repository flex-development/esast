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
    - [`Position`](#position)
    - [`Point`](#point)
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

**TODO**: document [`docast`][docast] relation\
**TODO**: document estree relation\
**TODO**: document javascript relation

esast extends [unist][unist], a format for syntax trees, to benefit from its [ecosystem of utilities][unist-utilities].

### ESTree

**TODO**: estree differences

## Types

TypeScript users can integrate `esast` type definitions into their project by installing the appropriate packages:

```sh
yarn add @flex-development/esast @flex-development/docast @types/mdast @types/unist
```

## Nodes (abstract)

### Node

```ts
interface Node extends unist.Node {
  position?: Position | undefined
}
```

**Node** ([**unist.Node**][unist-node]) is a syntactic unit in esast syntax trees.

The `position` field represents the location of a node in a source document. The value of the `position` field implements
the [`Position`](#position) interface. The `position` field must not be present if a node is [*generated*][unist-generated].

#### `Position`

```ts
interface Position {
  end: Point
  start: Point
}
```

**Position** represents the location of a node in a source [*file*][unist-file].

The `start` field of **Position** represents the index of the first character of the parsed source region. The `end`
field represents the index of the first character after the parsed source region, whether it exists or not. The value
of the `start` and `end` fields implement the [**Point**](#point) interface.

If the syntactic unit represented by a node is not present in the source [*file*][unist-file] at the time of parsing,
the node is said to be [*generated*][unist-generated] and it must not have positional information.

#### `Point`

```ts
interface Point {
  column: number // >= 1
  line: number // >= 1
  offset?: number | undefined // >= 0
}
```

**Point** represents one place in a source [*file*][unist-file].

The `line` and `column` fields are `1`-indexed integers representing a line and column in a source file. The offset
field (`0`-indexed integer) represents a character in a source file.

The term character refers to a (UTF-16) code unit as defined by the [Web IDL specification][webidl-spec].

### `Literal`

```ts
interface Literal extends Node {
  value: string
}
```

**Literal** represents an abstract interface in esast containing a value.

Its `value` field is a `string`.

### `Parent`

```ts
interface Parent extends unist.Parent {
  children: (Node | null | undefined)[]
}
```

**Parent** ([**unist.Parent**][unist-parent]) represents an abstract interface in esast containing other nodes (said to
be [*children*][unist-child]). The value `null` is used as a placeholder for certain higher-level parents. When using
TypeScript plugins and utilities, `undefined` allows for optional child nodes.

## Nodes

**TODO**: nodes

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
[javascript]: https://www.ecma-international.org/ecma-262/9.0/index.html
[mdast]: https://github.com/syntax-tree/mdast
[typescript]: https://typescriptlang.org
[unist-child]: https://github.com/syntax-tree/unist#child
[unist-file]: https://github.com/syntax-tree/unist#file
[unist-generated]: https://github.com/syntax-tree/unist#generated
[unist-glossary]: https://github.com/syntax-tree/unist#glossary

<!-- [unist-leaf]: https://github.com/syntax-tree/unist#leaf -->

[unist-node]: https://github.com/syntax-tree/unist#node
[unist-parent]: https://github.com/syntax-tree/unist#parent

<!-- [unist-root]: https://github.com/syntax-tree/unist#root -->

[unist-syntax-tree]: https://github.com/syntax-tree/unist#syntax-tree

<!-- [unist-tree]: https://github.com/syntax-tree/unist#tree -->

[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[unist]: https://github.com/syntax-tree/unist
[webidl-spec]: https://webidl.spec.whatwg.org/
