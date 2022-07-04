---
sidebar_position: 2
---

Babel 的配置文件，Babel 给我们提供了两种配置方式：

- babel.config.js（或者 babel.config.json）
- .babelrc（或者.babelrc.json、.babelrc.js）

两种配置的区别：

1. .babelrc 早期使用较多，但是对于配置 MonoRepo 项目比较麻烦
2. babel.config.js(babel 7)可以直接作用于 MonoRepo 项目，更加推荐

更具体的区别：https://babeljs.io/docs/en/config-files#configuration-file-types，babel 7 有一个根目录的概念，就是**当前的工作目录**，

babel.config.json 是项目维度的配置，可以理解为全局配置；.babelrc 是文件维度的配置，可以理解为局部配置：

- babel 会在当前执行目录搜索 `babel.config.js`, 若有则读取并作为全局配置，若无则全局配置为空
- 在转换一个具体的 js 文件时会去判断，如果这个文件在当前执行目录外面，则只应用全局配置。如果这个文件在当前执行路径内，则会去基于这个文件向上搜索最近的一个 `.babelrc`，将其与全局配置合并作为转换这个文件的配置

```
.
├── .babelrc
├── babel.config.js
├── package.json
└── src
    ├── index.js
    └── subdir
        ├── .babelrc
        └── utils.js
```

对于该配置，如果在顶层目录运行 `babel src/**/*.js --out-dir dist` 。此时会读取当前目录的 babel.config.js 作为全局配置，根据前文所述规则应用的配置如

- `src/index.js` 会应用 `babel.config.js + .babelrc`
- `src/subdir/utils.js` 会应用 `babel.config.js + src/subdir/.babelrc`

如果我们在 src 目录执行 `babel **/*.js --outdir` ，此时则不会应用 `babel.config.js` 的规则，对于具体文件的转换：
此时：

- `index.js` 会应用 `../.babelrc`
- `subdir/utils.js` 会应用 `subdir/.babelrc`

另外一个场景：

`packages/moduleA` 目录里执行打包命令时， `.babelrc` 只会应用 `packages/moduleA` 里的文件，对于 `common` 目录下的文件则无法执行转换。即便我们在 `common` 目录中添加一个 `.babelrc` 也无济于事，因为 `common` 里的代码在当前的项目范围外面，只会应用全局配置。所以这种场景就非常适合使用 `babel.config.js`

```
.
├── common
│   └── utils.js
├── package.json
└── packages
    └── modulea
        ├── .babelrc
        ├── index.js
        ├── package.json
        └── webpack.config.js
```

改成 babel.config.js 之后 common 目录就能正确进行转换了：

```diff
.
├── common
│   └── utils.js
├── package.json
└── packages
    └── moduleA
-       ├── .babelrc
+       ├── babel.config.js
        ├── index.js
        ├── package.json
        └── webpack.config.js
```

在 `moduleA` 下执行打包命令，工作目录也就是当前的 ”根” 目录是 `packages/moduleA`，所以会读取 `babel.config.js` 作为整个项目的全局配置，所以 `common` 也会被转换。

## 以配置 babel.config.js 为例

`babel.config.js`是 Babel 执行时会默认在当前目录寻找的 Babel 配置文件

- `@babel/cli`是 Babel 命令行转码工具，如果我们使用命令行进行 Babel 转码就需要安装它
- `@babel/cli依赖@babel/core`，因此也需要安装`@babel/core` 这个 Babel 核心 npm 包
- `@babel/preset-env` 这个 npm 包提供了 ES6 转换 ES5 的语法转换规则，我们在 Babel 配置文件里指定使用它。如果不使用的话，也可以完成转码，但转码后的代码仍然是 ES6 的，相当于没有转码

一个完整的 Babel 转码工程应该包括：

1. Babel 配置文件
2. Babel 相关的 npm 包
3. 需要转码的 JS 文件

然后就可以通过以下命令对单个 JS 文件进行转码：

```shell
npx babel main.js -o compiled.js
```

举例：

```js
// babel.config.js
module.exports = {
  plugins: ["transform-decorators-legacy"],
  presets: ["@babel/preset-env"],
};
```

这是 react 的 babel 配置：

```js
"use strict";

module.exports = {
  plugins: [
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "syntax-trailing-function-commas",
    [
      "@babel/plugin-proposal-object-rest-spread",
      { loose: true, useBuiltIns: true },
    ],
    ["@babel/plugin-transform-template-literals", { loose: true }],
    "@babel/plugin-transform-literals",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-block-scoped-functions",
    "@babel/plugin-transform-object-super",
    "@babel/plugin-transform-shorthand-properties",
    "@babel/plugin-transform-computed-properties",
    "@babel/plugin-transform-for-of",
    ["@babel/plugin-transform-spread", { loose: true, useBuiltIns: true }],
    "@babel/plugin-transform-parameters",
    [
      "@babel/plugin-transform-destructuring",
      { loose: true, useBuiltIns: true },
    ],
    ["@babel/plugin-transform-block-scoping", { throwIfClosureRequired: true }],
  ],
};
```

### plugins VS presets

> babel 的配置项其实都是 plugins 和 presets

实际上，配置 babel 就是配置 plugins 和 presets 这两个数组，我们分别称之为插件数组和预设数组。

plugin 代表插件，preset 代表预设，它们分别放在 plugins 和 presets，每个插件或预设都是一个 npm 包。

> plugin 是单个转换功能的实现，preset 是一组转换功能的集合

我们说通过 Babel 配置文件来指定编译的规则，所谓编译的规则，就是在配置文件里列出的编译过程中会用到的 Babel 插件或预设。这些插件和预设会在编译过程中把我们的 ES6 代码转换成 ES5。

Babel 插件的数量非常多，处理 ES2015 的有

```
@babel/plugin-transform-arrow-functions
@babel/plugin-transform-block-scoped-functions
@babel/plugin-transform-block-scoping
```

处理 ES2018 的有

```
@babel/plugin-proposal-async-generator-functions
@babel/plugin-transform-dotall-regex
```

所有的插件都需要先安装 npm 包到 node_modules 后才可以使用

Babel 插件实在太多，假如只配置插件数组，那我们前端工程要把`ES2015,ES2016,ES2017`下的所有插件都写到配置项里，Babel 配置文件会非常臃肿

preset 预设就是帮我们解决这个问题的。

**预设是一组 Babel 插件的集合**，可以理解为插件打包，例如 `babel-preset-es2015` 就是所有处理 es2015 的二十多个 Babel 插件的集合。这样就不用写一大堆插件配置项了,只需要用一个预设代替就可以了。另外，预设也可以是插件和其它预设的集合。Babel 官方已经对常用的环境做了一些 preset 包：

`babel-preset-env` 将基于你的实际浏览器及运行环境，自动的确定 `babel` 插件及 `polyfill`，编译 ES2015 及此版本以上的语言，在没有配置项的情况下，`babel-preset-env` 表现的同 `babel-preset-latest` 一样(或者可以说同 babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 结合到一起，表现的一致)

```
@babel/preset-env
@babel/preset-react
@babel/preset-typescript
@babel/preset-stage-0
@babel/preset-stage-1
```

所有的预设也都需要先安装 npm 包到 node_modules。

### 简写方式

插件可以在配置文件里写短名称，如果插件的 npm 包名称的前缀为 `babel-plugin-`，可以省略前缀。例如：

```js
module.exports = {
  presets: [],
  plugins: ["babel-plugin-transform-decorators-legacy"],
};
```

可以写成短名称：

```js
module.exports = {
  presets: [],
  plugins: ["transform-decorators-legacy"],
};
```

如果 npm 包名称的前缀带有 npm 作用域`@`，例如`@org/babel-plugin-xxx`，短名称可以写成`@org/xxx`。

:::tip

- 如果 @scope 开头，不包含 plugin，则会添加 babel-plugin，比如 @scope/mod 会变为 @scope/babel-plugin-mod
- babel 自己的 @babel 开头的包，会自动添加 plugin，比如 @babel/aa 会变成 @babel/plugin-aa

babel 希望插件名字中能包含 babel plugin，这样写 plugin 的名字的时候就可以简化，然后 babel 自动去补充。所以我们写的 babel 插件最好是 babel-plugin-xx 和 @scope/babel-plugin-xx 这两种，就可以简单写为 xx 和 @scope/xx
:::

预设的短名称规则与插件的类似，预设 npm 包名称的前缀为 `babel-preset-` 或作用域 `@xxx/babel-preset-xxx` 的可以省略掉 `babel-preset-`

### 执行顺序

plugins 插件数组和 presets 预设数组是有顺序要求的。如果两个插件或预设都要处理同一个代码片段，那么会根据插件和预设的顺序来执行。规则如下：

- 插件比预设先执行
- 插件执行顺序是插件数组从前向后执行
- 预设执行顺序是预设数组从后向前执行

## babel 插件与预设的选择

:::tip 背景
在 Babel6 的时代，常见的 preset 有 babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest、babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2 等。

babel-preset-es2015、babel-preset-es2016、babel-preset-es2017 分别是 TC39 每年发布的进入标准的 ES 语法的转换器预设，我们在这里称之为年代 preset。

目前，Babel 官方不再推出 babel-preset-es2017 以后的年代 preset 了。

babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2、babel-preset-stage-3 是 TC39 每年草案阶段的 ES 语法转换器预设

从 Babel7 版本开始，上述的预设都已经不推荐使用了，babel-preset-stage-X 因为对开发造成了一些困扰，也不再更新。

babel-preset-latest，在 Babel6 的时候是你在使用它的时候所有年代 preset 的集合，在 Babel6 最后一个版本，它是 babel-preset-es2015、babel-preset-es2016、babel-preset-es2017 这三个的集合。因为 Babel 官方不再推出 babel-preset-es2017 以后的年代 preset 了，所以 babel-preset-latest 定义变成了 TC39 每年发布的进入标准的 ES 语法的转换器预设集合。其实，和 Babel6 时的内涵是一样的。
:::

**@babel/preset-env 包含了 babel-preset-latest 的功能，并对其进行增强**，现在@babel/preset-env 完全可以替代 babel-preset-latest。

可以总结为以前要用到的那么多 preset 预设，现在只需一个@babel/preset-env 就可以了。

在实际开发过程中，除了使用 **`@babel/preset-env` 对标准的 ES6 语法转换**，我们可能还需要类型检查和 react 等预设对特定语法转换。这里有三个官方预设可以使用：

- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

总结起来，Babel 官方的 preset，我们实际可能会用到的其实就只有 4 个：

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

一个普通的 vue 工程，Babel 官方的 preset 只需要配一个"@babel/preset-env"就可以了。

对于插件，虽然 Babel7 官方有 90 多个插件，不过大半已经整合在@babel/preset-env 和@babel/preset-react 等预设里了，我们在开发的时候直接使用预设就可以了。

目前比较常用的插件只有@babel/plugin-transform-runtime。

开发的过程中可能用到 4 个预设和 1 个插件。分别是@babel/preset-env、@babel/preset-flow、@babel/preset-react、@babel/preset-typescript 这 4 个预设，以及 @babel/plugin-transform-runtime 这 1 个插件。
