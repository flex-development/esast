## [1.0.0-alpha.5](https://github.com/flex-development/esast/compare/1.0.0-alpha.4...1.0.0-alpha.5) (2024-03-15)

### :package: Build

- [[`a66cec6`](https://github.com/flex-development/esast/commit/a66cec6fd659434d72cb793b55e99aae58acac23)] **deps-dev:** Bump esbuild from 0.20.1 to 0.20.2 ([#19](https://github.com/flex-development/esast/issues/19))
- [[`949d7c1`](https://github.com/flex-development/esast/commit/949d7c105f304e12ff3126c7092252fe75873283)] **deps-peer:** bump @flex-development/unist-util-types from 1.0.0 to 1.1.0

### :pencil: Documentation

- [[`5b0efc7`](https://github.com/flex-development/esast/commit/5b0efc71f83ba3353eb349e94e5da747d2e46264)] [contributing] fix commitlint config reference

### :sparkles: Features

- [[`f91b7cc`](https://github.com/flex-development/esast/commit/f91b7cc9b47ffb2fc7868a939582c7e9395bd58b)] **nodes:** leading and trailing comments
- [[`0075a66`](https://github.com/flex-development/esast/commit/0075a668669f041ee6ff79b43ebfda245778b6e2)] **types:** `Comments`

### :mechanical_arm: Refactors

- [[`e87402e`](https://github.com/flex-development/esast/commit/e87402e07cae9c035ec5572e64404ebe627a0d15)] comment parents

## [1.0.0-alpha.4](https://github.com/flex-development/esast/compare/1.0.0-alpha.3...1.0.0-alpha.4) (2024-03-13)

### ⚠ BREAKING CHANGES

- **nodes:** [`ImportSpecifier`] `kind`

### :package: Build

- [[`296765f`](https://github.com/flex-development/esast/commit/296765ffd952d7d759efd79431de542cb55df2d3)] **deps-dev:** Bump the commitlint group with 1 update ([#15](https://github.com/flex-development/esast/issues/15))
- [[`560d2dd`](https://github.com/flex-development/esast/commit/560d2dd78fd0b40a68034d35a1aeb0463586ff30)] **deps-dev:** Bump the typescript-eslint group with 2 updates ([#14](https://github.com/flex-development/esast/issues/14))

### :robot: Continuous Integration

- [[`51af83d`](https://github.com/flex-development/esast/commit/51af83d2552263100e99be406627a4985e89fa1b)] **deps:** Bump actions/checkout from 4.1.1 to 4.1.2 ([#16](https://github.com/flex-development/esast/issues/16))

### :sparkles: Features

- [[`e614e86`](https://github.com/flex-development/esast/commit/e614e867caf9991b17e8aef4fd6ae375b33e9ecb)] **content:** [node] `EsastNode`
- [[`0c8009b`](https://github.com/flex-development/esast/commit/0c8009b6822b5963e76ee5e61d4ecab61269db00)] **nodes:** [`ImportSpecifier`] `kind`

### :bug: Fixes

- [[`0c95017`](https://github.com/flex-development/esast/commit/0c950173bd387bc12dced0dfa87b034b21bab383)] **nodes:** [`ExportNamedDeclaration`] define `children` as tuple union

### :mechanical_arm: Refactors

- [[`8604747`](https://github.com/flex-development/esast/commit/86047473dec6ec07335cbda8ede6d398b21b1094)] comment parents
- [[`80a80bd`](https://github.com/flex-development/esast/commit/80a80bd81617fc49285a5a014015969d3d059190)] unist-util-types integration

## [1.0.0-alpha.3](https://github.com/flex-development/esast/compare/1.0.0-alpha.2...1.0.0-alpha.3) (2024-03-11)

### :bug: Fixes

- [[`7cf7fb4`](https://github.com/flex-development/esast/commit/7cf7fb474ac107f3cb906468ab940c63e88804c1)] **nodes:** [`TryStatement`] define `children` as tuple union

## [1.0.0-alpha.2](https://github.com/flex-development/esast/compare/1.0.0-alpha.1...1.0.0-alpha.2) (2024-03-11)

### :sparkles: Features

- [[`5caa8b4`](https://github.com/flex-development/esast/commit/5caa8b44baabe71053b98fbde5b856efd76c9070)] **content:** `AnyNode`, `AnyParent`, `Child`, `NodeMap`
- [[`7fb1573`](https://github.com/flex-development/esast/commit/7fb15735a90f90e6bb6816b28f81382cc94971dd)] **nodes:** `Nothing`

## 1.0.0-alpha.1 (2024-03-09)

### :package: Build

- [[`45eda76`](https://github.com/flex-development/esast/commit/45eda76f99e6e462d0e82219e2e684487737d623)] **deps-dev:** Bump @arethetypeswrong/cli from 0.15.0 to 0.15.1 ([#7](https://github.com/flex-development/esast/issues/7))
- [[`c9af58a`](https://github.com/flex-development/esast/commit/c9af58aff69cae03cc557e5d05ddf19e129998a6)] **deps-dev:** bump @types/node from 20.11.24 to 20.11.25
- [[`bdfd445`](https://github.com/flex-development/esast/commit/bdfd4457170f674a50a106a343a09e5b82e128ac)] **deps-dev:** Bump eslint-plugin-jsdoc from 48.2.0 to 48.2.1 ([#6](https://github.com/flex-development/esast/issues/6))
- [[`20a9811`](https://github.com/flex-development/esast/commit/20a9811d241928a2a770e455531e25fb802d212b)] **deps-dev:** Bump eslint-plugin-markdown from 3.0.1 to 4.0.1 ([#5](https://github.com/flex-development/esast/issues/5))
- [[`0259a94`](https://github.com/flex-development/esast/commit/0259a941d55ca80c984b08e1b6c7b18e69000735)] **deps-dev:** bump typescript from 5.3.3 to 5.4.2
- [[`ea81415`](https://github.com/flex-development/esast/commit/ea81415ac555d0a867a6aea7bcb8b10df4a49541)] **deps:** Bump semver from 5.7.1 to 5.7.2 ([#3](https://github.com/flex-development/esast/issues/3))

### :robot: Continuous Integration

- [[`593e226`](https://github.com/flex-development/esast/commit/593e226258df8187c054c0168a9281c6a41f64a9)] **deps:** Bump actions/add-to-project from 0.5.0 to 0.6.0 ([#2](https://github.com/flex-development/esast/issues/2))
- [[`0464687`](https://github.com/flex-development/esast/commit/0464687939ae2d30b8443f817c93ada67bb54eaa)] **deps:** Bump actions/create-github-app-token from 1.8.1 to 1.9.0 ([#1](https://github.com/flex-development/esast/issues/1))
- [[`1c0a7d5`](https://github.com/flex-development/esast/commit/1c0a7d58ce8cc56a114b60c0aa8a49e582a9e22b)] **workflows:** [`no-response`] use bot token

### :pencil: Documentation

- [[`7f4db46`](https://github.com/flex-development/esast/commit/7f4db464c2d7fbbccb1bd257cc52a06abea77519)] **spec:** [nodes] add wip note + source code reference
- [[`6883b68`](https://github.com/flex-development/esast/commit/6883b684f9f6387628c71e7c18127ae134f0bdcb)] **spec:** git install
- [[`550da19`](https://github.com/flex-development/esast/commit/550da19f1b6459d3d02e6af59df88d371864676c)] **spec:** nodes (abstract)
- [[`a3a65a3`](https://github.com/flex-development/esast/commit/a3a65a301e8e944e264fcc8c9eb596a6743e6652)] **spec:** where this specification fits

### :sparkles: Features

- [[`c818d50`](https://github.com/flex-development/esast/commit/c818d50f128e19ce97c5b04b364d81cf46574b7e)] **content:** [expression] add `MetaProperty` to map
- [[`f578b08`](https://github.com/flex-development/esast/commit/f578b085fb3416029a273e4bc0fa4e87d5f56bc7)] **content:** `Content`
- [[`310368d`](https://github.com/flex-development/esast/commit/310368d7d769a4f1e2ff5bb9dbac698383b7e921)] **content:** `Declaration`, `DeclarationMap`
- [[`a72c6aa`](https://github.com/flex-development/esast/commit/a72c6aab70b19f5348c217d59f0f184430980ea9)] **content:** `ExportDeclaration`, `ExportDeclarationMap`
- [[`d49b280`](https://github.com/flex-development/esast/commit/d49b280aefd366daa0af5b29063de44f4d21ee8e)] **content:** `Expression`, `ExpressionMap`
- [[`1c53418`](https://github.com/flex-development/esast/commit/1c534186d2268edb6fe1f66494dee44af81b2536)] **content:** `Heritage`, `HeritageMap`
- [[`70bae5f`](https://github.com/flex-development/esast/commit/70bae5f1592f80d03c949f261373810c4ab35368)] **content:** `LiteralMap`, `LiteralValue`
- [[`8f0c0be`](https://github.com/flex-development/esast/commit/8f0c0be33ec2f558ed92c4538e24109f9e7af9ed)] **content:** `ModuleDeclaration`, `ModuleDeclarationMap`
- [[`ce857ce`](https://github.com/flex-development/esast/commit/ce857ce6c0d9482ecf21be7cbf01ddb5b633c325)] **content:** `Pattern`, `PatternMap`
- [[`7b527dd`](https://github.com/flex-development/esast/commit/7b527dd801d9611ecd55e2d23420ceeec0e5358e)] **content:** `PrimitiveMap`, `Primitive`
- [[`f849aeb`](https://github.com/flex-development/esast/commit/f849aeb5973b30f636f088fed19002318e05065f)] **content:** `RootChild`, `RootMap`
- [[`39f0a77`](https://github.com/flex-development/esast/commit/39f0a77319ce0fe4a9ce47c0be746d64081363d9)] **content:** `Statement`, `StatementMap`
- [[`6df03ab`](https://github.com/flex-development/esast/commit/6df03ab4742359f437c9e1445de98f751e525220)] **data:** `CommentData`
- [[`756b95b`](https://github.com/flex-development/esast/commit/756b95b61cff0a62bb33a3a45b15f7d9b3940769)] **data:** `Data`
- [[`df9f699`](https://github.com/flex-development/esast/commit/df9f6993bcfef16135d833ace927e9f946843906)] **nodes:** `ArrayExpression`
- [[`ef37dc8`](https://github.com/flex-development/esast/commit/ef37dc8b8e81ff85eeba488b1b30e88ab5bce54f)] **nodes:** `ArrayPattern`
- [[`cd30760`](https://github.com/flex-development/esast/commit/cd307600267a71fc2bac6d8d38409f68443c65bf)] **nodes:** `AssignmentExpression`, `AssignmentPattern`
- [[`62d73f4`](https://github.com/flex-development/esast/commit/62d73f4f5b2e290c34ed78bfaf283fd89e704b30)] **nodes:** `AwaitExpression`
- [[`f404c67`](https://github.com/flex-development/esast/commit/f404c67e5ef67cfe2a70813599b6478d974b6e16)] **nodes:** `BigIntLiteral`
- [[`3bbd210`](https://github.com/flex-development/esast/commit/3bbd210eb09e317be461c827e5c3b41f82ede136)] **nodes:** `BinaryExpression`
- [[`a0cf31c`](https://github.com/flex-development/esast/commit/a0cf31c7a814bc76103c9cbb4a5f22a893720387)] **nodes:** `BlockComment`, `LineComment`
- [[`ea01ab1`](https://github.com/flex-development/esast/commit/ea01ab18f6803cc2359d130d3b162f470bbfbbf3)] **nodes:** `BlockStatement`
- [[`73de415`](https://github.com/flex-development/esast/commit/73de4153ac1c466595ce5c9c602c4455ee98a761)] **nodes:** `BooleanLiteral`
- [[`2672b3d`](https://github.com/flex-development/esast/commit/2672b3d0dfe635ac0a40523008ac1c9f3b5dad43)] **nodes:** `BreakStatement`
- [[`7abbb11`](https://github.com/flex-development/esast/commit/7abbb11d2fc24306ca48d4b2b5ab70904f122e92)] **nodes:** `CallExpression`
- [[`a9b670b`](https://github.com/flex-development/esast/commit/a9b670b46d7d2e88931d7657e24740685da134d5)] **nodes:** `CatchClause`
- [[`59a5663`](https://github.com/flex-development/esast/commit/59a566393583bf712d160c2acae2232b9b71396a)] **nodes:** `ChainExpression`
- [[`87a1059`](https://github.com/flex-development/esast/commit/87a105914d6267f5fe0547fc1f40aa56d9a4184c)] **nodes:** `ClassBody`
- [[`d03daf4`](https://github.com/flex-development/esast/commit/d03daf40dd529da502786842d2059b6483b2242c)] **nodes:** `ClassDeclaration`, `ClassExpression`
- [[`9969358`](https://github.com/flex-development/esast/commit/99693583078cb3116aeb953788a6e6441cfb56bc)] **nodes:** `ClassHeritage`
- [[`8dbae2e`](https://github.com/flex-development/esast/commit/8dbae2e219079f9d25d195660c8637fcc5e2b6d2)] **nodes:** `Comment`
- [[`e3364d8`](https://github.com/flex-development/esast/commit/e3364d84e93a3baa528b01edaaaed0f6978d394c)] **nodes:** `ConditionalExpression`
- [[`3c00819`](https://github.com/flex-development/esast/commit/3c008199a05df32abc81ca109dd47cd34c8f00de)] **nodes:** `ContinueStatement`
- [[`0050aad`](https://github.com/flex-development/esast/commit/0050aad40c1eef98ec79792a652a112639ec21f4)] **nodes:** `DebuggerStatement`
- [[`03f2d28`](https://github.com/flex-development/esast/commit/03f2d283ffe7849e5281a14e87f2aff90aa5d739)] **nodes:** `DefaultIdentifier`
- [[`423d0bf`](https://github.com/flex-development/esast/commit/423d0bf467807302af657bfa804bfc7426f22eb3)] **nodes:** `Directive`
- [[`919c026`](https://github.com/flex-development/esast/commit/919c026630f31536692338a30c10408177a003e4)] **nodes:** `DocblockComment`
- [[`6ac3a45`](https://github.com/flex-development/esast/commit/6ac3a45760f6032a1e4f1341576bfc64b53e6e8b)] **nodes:** `DocblockComment`, `HashbangComment`
- [[`f019e2a`](https://github.com/flex-development/esast/commit/f019e2ad44b42119161e6eb88cfe941da11fd359)] **nodes:** `DoWhileStatement`
- [[`8072fbd`](https://github.com/flex-development/esast/commit/8072fbdc29c489ec7a66673eadfbf7728fb3cc73)] **nodes:** `EmptyStatement`
- [[`a7bd70e`](https://github.com/flex-development/esast/commit/a7bd70e3020c445560e0901ca4c8215e10de9136)] **nodes:** `ExportAllDeclaration`
- [[`09336a1`](https://github.com/flex-development/esast/commit/09336a15b73afeadbd6d054e3e96a90fff4120d5)] **nodes:** `ExportDefaultDeclaration`
- [[`25bc14b`](https://github.com/flex-development/esast/commit/25bc14b945d426acf66cd22b4d959f70e2b6cdc4)] **nodes:** `ExportNamedDeclaration`
- [[`f40c600`](https://github.com/flex-development/esast/commit/f40c600ee2c66e8c141b9cd08dee94c894b1aab9)] **nodes:** `ExportSpecifier`, `ExportSpecifiers`
- [[`b832ad1`](https://github.com/flex-development/esast/commit/b832ad1ecc35f5341e9aedc0bc15501e2b72c989)] **nodes:** `ExpressionStatement`
- [[`6025de8`](https://github.com/flex-development/esast/commit/6025de81e8a17399f19d9f30c527dc00dac74de5)] **nodes:** `ForInStatement`, `ForOfStatement`
- [[`c0bb616`](https://github.com/flex-development/esast/commit/c0bb616736d2b4e1babfbcdd501c9b8639d389d8)] **nodes:** `ForStatement`
- [[`a5f92b2`](https://github.com/flex-development/esast/commit/a5f92b23f492adb073a1ab57d79027ed6b11bef0)] **nodes:** `FunctionDeclaration`
- [[`53190ff`](https://github.com/flex-development/esast/commit/53190ff4babc0f1f84ebc88b60436fd3fa682a55)] **nodes:** `FunctionExpression`
- [[`8cb7e57`](https://github.com/flex-development/esast/commit/8cb7e5742272d3138144b0dbf614cec39d96db62)] **nodes:** `Identifier`
- [[`17ab0b9`](https://github.com/flex-development/esast/commit/17ab0b95f069070323a767143374e683d2a08f8f)] **nodes:** `IfStatement`
- [[`8aad7c1`](https://github.com/flex-development/esast/commit/8aad7c1437c441a1a84e12d5c1fc742e56090716)] **nodes:** `ImportDeclaration`
- [[`a425933`](https://github.com/flex-development/esast/commit/a425933b298d63fcc024d088f617d7d498290b63)] **nodes:** `ImportExpression`
- [[`10e6f41`](https://github.com/flex-development/esast/commit/10e6f41fd06abcc74a52b27e4da970dd8fdf524a)] **nodes:** `ImportIdentifier`
- [[`3a25a9e`](https://github.com/flex-development/esast/commit/3a25a9eeeb5b52bf396db3bb17659ee3e51e4700)] **nodes:** `ImportSpecifier`, `ImportSpecifiers`
- [[`846fe98`](https://github.com/flex-development/esast/commit/846fe98a9aebc55fb9f205033a918bb2986f120c)] **nodes:** `LabeledStatement`
- [[`b79479e`](https://github.com/flex-development/esast/commit/b79479e1bea078b92d1f101bc30735509cfeeb3b)] **nodes:** `Literal`
- [[`7bf96ea`](https://github.com/flex-development/esast/commit/7bf96ea536314b4734797a53737c20bab65c6a3b)] **nodes:** `LogicalExpression`
- [[`9cbc664`](https://github.com/flex-development/esast/commit/9cbc664f2e328cadc668b87efef6fbd3ef26551a)] **nodes:** `MemberExpression`
- [[`aad365e`](https://github.com/flex-development/esast/commit/aad365e6f45fab8d291598b194b39bc81a2beb4a)] **nodes:** `MetaIdentifier`
- [[`293dca2`](https://github.com/flex-development/esast/commit/293dca2faecf7695711f91155abf36f30330d405)] **nodes:** `MetaProperty`
- [[`7e234fe`](https://github.com/flex-development/esast/commit/7e234fea7877d0029f20aa4911531a47fc538ead)] **nodes:** `MethodDefinition`
- [[`31d233d`](https://github.com/flex-development/esast/commit/31d233dc2802b4591d313e049c37b11f94f1d35f)] **nodes:** `MultiLineComment`
- [[`cc39ea0`](https://github.com/flex-development/esast/commit/cc39ea04c9d14dbceed0d118dc90eba00e62e949)] **nodes:** `Node`
- [[`870e397`](https://github.com/flex-development/esast/commit/870e397ed01aa96183bf62afbb381573c2d97512)] **nodes:** `NullLiteral`
- [[`04830dd`](https://github.com/flex-development/esast/commit/04830dd7dd352339f40c42b9f4fb227794d654fb)] **nodes:** `NumberLiteral`
- [[`3ffd64a`](https://github.com/flex-development/esast/commit/3ffd64af03495a7c8a0274b52d62ee7d892c6eb8)] **nodes:** `ObjectExpression`, `ObjectPattern`
- [[`3307bbe`](https://github.com/flex-development/esast/commit/3307bbe363538071bcba0df61cf858f990149f9e)] **nodes:** `ParameterList`
- [[`2c0b95a`](https://github.com/flex-development/esast/commit/2c0b95a7cadfe27005e6aa38082fc2b02635138b)] **nodes:** `Parent`
- [[`a3a9289`](https://github.com/flex-development/esast/commit/a3a9289d53a71482289c823d950f72dc4b3c34d3)] **nodes:** `Property`
- [[`48c8e46`](https://github.com/flex-development/esast/commit/48c8e462bdb9f599dd5595d51c115df5758d71fe)] **nodes:** `PropertyDefinition`
- [[`6be503a`](https://github.com/flex-development/esast/commit/6be503a9ec618a0d6ad4b2c2290178f8aa3cbb67)] **nodes:** `RegExpLiteral`
- [[`3e6045b`](https://github.com/flex-development/esast/commit/3e6045bc10b84413ff35bd3f56f9c23d10a7a3d6)] **nodes:** `RequireIdentifier`
- [[`d923036`](https://github.com/flex-development/esast/commit/d9230368f1cda98d85c875c9cb5352332a7223c3)] **nodes:** `RestElement`
- [[`468c32f`](https://github.com/flex-development/esast/commit/468c32f874c793b528bca26f46a0c0bca107964e)] **nodes:** `ReturnStatement`
- [[`0a118cb`](https://github.com/flex-development/esast/commit/0a118cbb8bbe2288e51b5e1f9ef9e6729befd658)] **nodes:** `Root`
- [[`b4aa36f`](https://github.com/flex-development/esast/commit/b4aa36f339f5d5aa602ad0ae66286a02b593ad3d)] **nodes:** `SequenceExpression`
- [[`a9c8171`](https://github.com/flex-development/esast/commit/a9c81716e2a00ff296dbf9347faea4d9a16dc40e)] **nodes:** `SingleLineComment`
- [[`10b81ee`](https://github.com/flex-development/esast/commit/10b81eee1e56fbbcf41c4b26a6a7371938a1a676)] **nodes:** `SpreadElement`
- [[`4e6af0f`](https://github.com/flex-development/esast/commit/4e6af0f07a9e73cf343d8d48f3b96970160b75e2)] **nodes:** `StaticBlock`
- [[`3272432`](https://github.com/flex-development/esast/commit/32724322c77d41af959e0fac6c54930566cf15e4)] **nodes:** `StringLiteral`
- [[`010178e`](https://github.com/flex-development/esast/commit/010178e50e9989801854007d297cba47a3e56be3)] **nodes:** `Super`
- [[`500430c`](https://github.com/flex-development/esast/commit/500430c390518f1417de5d0181921c2417bf188c)] **nodes:** `SwitchCase`
- [[`2b6005c`](https://github.com/flex-development/esast/commit/2b6005c1a2b4eeff4b6a4c0869ad031ceb32b1ac)] **nodes:** `SwitchStatement`
- [[`21c3ce4`](https://github.com/flex-development/esast/commit/21c3ce448b67afd733edcd748d8289982b9826c4)] **nodes:** `TaggedTemplateExpression`
- [[`b95633f`](https://github.com/flex-development/esast/commit/b95633f52f10f10e74c4377226371dc031c709a0)] **nodes:** `TemplateElement`
- [[`ceb5e45`](https://github.com/flex-development/esast/commit/ceb5e45c7649a2826c0924db4538059b0edb5647)] **nodes:** `TemplateLiteral`
- [[`7f3b48b`](https://github.com/flex-development/esast/commit/7f3b48b6ffb1033caea6fe597aa40cf9a5bc0892)] **nodes:** `This`
- [[`9c0de9f`](https://github.com/flex-development/esast/commit/9c0de9f45af51cc2afb043c7a401369b2f1f9904)] **nodes:** `ThrowStatement`
- [[`18c0d84`](https://github.com/flex-development/esast/commit/18c0d84185cda305b5d6685648aee0734a6345e1)] **nodes:** `TryStatement`
- [[`3e862f1`](https://github.com/flex-development/esast/commit/3e862f1b4ce9db6e281a103cc52048e683814168)] **nodes:** `UnaryExpression`
- [[`10195b4`](https://github.com/flex-development/esast/commit/10195b4cff32a1ae72b41238fc357e627917bb50)] **nodes:** `UndefinedLiteral`
- [[`7eb4855`](https://github.com/flex-development/esast/commit/7eb4855053978256452594c68b0280949b2f77f9)] **nodes:** `UpdateExpression`
- [[`f675347`](https://github.com/flex-development/esast/commit/f675347831612d85ff68f8c28255de5f026cbfbb)] **nodes:** `VariableDeclaration`
- [[`58ddf01`](https://github.com/flex-development/esast/commit/58ddf01515d198179e9ea076a8bdf3b7284c1008)] **nodes:** `VariableDeclarator`
- [[`7f0d32e`](https://github.com/flex-development/esast/commit/7f0d32e5491b4f5a5cd73208f050178deb4ff721)] **nodes:** `WhileStatement`
- [[`cae5089`](https://github.com/flex-development/esast/commit/cae50897066bb20faa02b267f224b4afe9053f31)] **nodes:** `WithStatement`
- [[`16635c3`](https://github.com/flex-development/esast/commit/16635c3043f9dde1540c212727b3aec47b466dcf)] **nodes:** `YieldExpression`
- [[`4549df8`](https://github.com/flex-development/esast/commit/4549df83cad8b3a1bff096da758a06e4ea43ffd8)] **types:** `AnyClass`
- [[`c3623ef`](https://github.com/flex-development/esast/commit/c3623ef5500b903bcbd0730a387fe575b0178280)] **types:** `AnyFunction`
- [[`e9870eb`](https://github.com/flex-development/esast/commit/e9870eb9651188730fde4b769da5b27a816e63d9)] **types:** `ArithmeticOperator`
- [[`5bd57f3`](https://github.com/flex-development/esast/commit/5bd57f3b308f27a6c9c877b52935ac3f1122d20e)] **types:** `AssignmentOperator`
- [[`6296529`](https://github.com/flex-development/esast/commit/6296529bdcd6cc510a01a4d44627e48748eeb5d3)] **types:** `BinaryOperator`
- [[`734b62e`](https://github.com/flex-development/esast/commit/734b62e30914ba2a74c5274b7c13fef23e7ba9b6)] **types:** `BitwiseBinaryOperator`
- [[`ac1628b`](https://github.com/flex-development/esast/commit/ac1628b46b972e645154cea42e18f98b8f9ae2e8)] **types:** `BitwiseOperator`
- [[`15ff607`](https://github.com/flex-development/esast/commit/15ff6074cd5333496029fc6c1c2e8a8b83d706a2)] **types:** `BitwiseShiftOperator`
- [[`bac1a98`](https://github.com/flex-development/esast/commit/bac1a98cde853d1caa75cab122b0d00da9964110)] **types:** `Comment`
- [[`48dbf9a`](https://github.com/flex-development/esast/commit/48dbf9abd6424e0e295ae6463a90603c1d027847)] **types:** `EcmaVersion`
- [[`daeaad1`](https://github.com/flex-development/esast/commit/daeaad1d68bd1053dd8fcd768b5413089ae58bec)] **types:** `EqualityOperator`
- [[`100f7cb`](https://github.com/flex-development/esast/commit/100f7cb68e55cfa08276ab796484fbeebeecfc3e)] **types:** `ImportKind`
- [[`f590aa3`](https://github.com/flex-development/esast/commit/f590aa39e60bd2d42cb388e36d8bde3db0c1119d)] **types:** `LogicalOperator`
- [[`c330d50`](https://github.com/flex-development/esast/commit/c330d5042ae3315a30243b756607221a5c486bf7)] **types:** `MethodKind`
- [[`94c09fb`](https://github.com/flex-development/esast/commit/94c09fbdd48d5c0cf999a467cc933b5722cd3c69)] **types:** `PropertyKind`
- [[`40e7fbe`](https://github.com/flex-development/esast/commit/40e7fbe21f1ea3af05ff87c7e13fceaaacb94bf8)] **types:** `RelationalOperator`
- [[`86babf7`](https://github.com/flex-development/esast/commit/86babf7e86230eda61df812b8cdf6d6aeddb8b19)] **types:** `SourceType`
- [[`8a9c195`](https://github.com/flex-development/esast/commit/8a9c19564d7ccae360b2fff7bf0bcf0de451fd1d)] **types:** `UnaryOperator`
- [[`5be89a7`](https://github.com/flex-development/esast/commit/5be89a784e0fd879d01dc529a1c532f2dde8d0d5)] **types:** `UpdateOperator`
- [[`1b613fe`](https://github.com/flex-development/esast/commit/1b613fec523d5b26f84392017d86cf687e2ae7e2)] **types:** `VariableKind`

### :house_with_garden: Housekeeping

- [[`e654a1f`](https://github.com/flex-development/esast/commit/e654a1fc39858cff33216f2543b8c86c2b7250cf)] initial commit

### :mechanical_arm: Refactors

- [[`1fbe902`](https://github.com/flex-development/esast/commit/1fbe902a306f53e9c8a4fadb88e8cd24a8dc0cd2)] **types:** `SourceType` -> `SourceMode`






