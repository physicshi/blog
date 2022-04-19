---
sidebar_position: 5
---

**tree-shaking 移除未引用的代码。**

- 在 optimization 中配置 usedExports 为 true，来帮助 Terser 进行优化;
- 在 package.json 中配置 sideEffects，直接对模块进行优化;
  - 严格来讲第二种不算 tree-shaking

### usedExports

**usedExports 特性在 production 模式下会自动开启**

```js
// webpack.config.js
module.exports = {
  // ... 其他配置项
  // 优化
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 压缩输出结果
    minimize: true,
  },
};
```

### sideEffects

**移除副作用代码**

`Webpack 4` 中新增了一个 `sideEffects` 特性，它允许我们通过配置标识我们的代码是否有副作用，从而提供更大的压缩空间。

> 模块的副作用指的就是模块执行的时候除了导出成员，是否还做了其他的事情。

这个特性一般只有我们去开发一个 `npm` 模块时才会用到。因为官网把对 `sideEffects` 特性的介绍跟 `Tree-shaking `混到了一起，所以很多人误认为它们之间是因果关系，其实它们没有什么太大的关系

**`Tree-shaking` 只能移除没有用到的代码成员，而想要完整移除没有用到的模块（模块里可能会有一些副作用代码），那就需要开启 `sideEffects` 特性了**。

`Tree-shaking`基于`ESM`，所以只能移除没用到的那些`export`的部分。

开启`sideEffects`：

**`sideEffects`特性在 `production` 模式下同样会自动开启**

```js
// ./webpack.config.js
module.exports = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
  },
  optimization: {
    sideEffects: true,
  },
};
```

此时 `Webpack` 在打包某个模块之前，会先检查这个模块所属的 `package.json` 中的 `sideEffects` 标识，以此来判断这个模块是否有副作用，如果没有副作用`false`的话，这些没用到的模块就不再被打包。换句话说，即便这些没有用到的模块中存在一些副作用代码，我们也可以通过 `package.json` 中的 `sideEffects` 去强制声明没有副作用。

我们打开项目 `package.json` 添加一个 `sideEffects` 字段，把它设置为 `false`，具体代码如下：

```json
{
  "name": "side-effects",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.46.0",
    "webpack-cli": "^4.7.2"
  },
  "sideEffects": false
}
```

这样就表示我们这个项目中的所有代码都没有副作用，让 `Webpack` 放心大胆地去移除。

- `webpack.config.js` 中的 `sideEffects` 用来开启这个功能；
- `package.json` 中的 `sideEffects` 用来标识我们的代码没有副作用。

目前很多第三方的库或者框架都已经使用了 `sideEffects` 标识，所以我们再也不用担心为了一个小功能引入一个很大体积的库了。例如，某个 `UI` 组件库中只有一两个组件会用到，那只要它支持 `sideEffects`，你就可以放心大胆的直接用了。

> 其实 `webpack` 里的 `sideEffects: false` 的意思并不是我这个模块真的没有副作用，而只是为了在"摇树"时告诉 `webpack`：**我这个包在设计的时候就是期望没有副作用的，即使他打完包后是有副作用的，webpack 同学你"摇树"时放心的当成无副作用包摇就好啦！**。

但是有的时候我们可能也需要副作用，不希望被移除，可以在`package.json`文件中声明需要保留副作用的模块路径：

> `JS` 中直接载入的 `CSS` 模块，属于副作用模块

```json
{
  "name": "side-effects",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.46.0",
    "webpack-cli": "^4.7.2"
  },
  "sideEffects": ["./src/extend.js", "*.css"]
}
```

如果我们引入的 包/模块 被标记为 `sideEffects: false` 了，那么不管它是否真的有副作用，只要它没有被引用到，整个 模块/包 都会被完整的移除。以 `mobx-react-devtool` 为例，我们通常这样去用：

```js
import DevTools from "mobx-react-devtools";

class MyApp extends React.Component {
  render() {
    return (
      <div>
        ...
        {process.env.NODE_ENV === "production" ? null : <DevTools />}
      </div>
    );
  }
}
```

这是一个很常见的按需导入场景，然而在没有 `sideEffects: false` 配置时，即便 `NODE_ENV` 设为 `production` （`production` 模式会自动`sideEffects: true`），打包后的代码里依然会包含 `mobx-react-devtools` 包，虽然我们没使用过其导出成员，但是 `mobx-react-devtools` 还是会被 import，因为里面“可能”会有副作用。但当我们加上 sideEffects false 之后，tree shaking 就能安全的把它从 bundle 里完整的移除掉了。
