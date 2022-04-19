---
sidebar_position: 3
---

> webpack 只能理解 JavaScript 和 JSON 文件。**loader**让 webpack 能够去处理其他类型的文件，以及被添加到依赖图中。

我们的 loader 主要通过两个属性来让我们的 webpack 进行联动识别：

- test 属性，识别出哪些文件会被转换。
- use 属性，定义出在进行转换时，应该使用哪个 loader。

`module.rules`数组允许你在 `webpack` 配置中指定多个 `loader`对象：test 属性 、use 属性（一般就是`loader`的字符串数组）。

> 不过一般 loader 有四种写法：
>
> - `loader: "css-loader"`
> - `use: [ "css-loader" ]` ** // 通常是这种**
> - `use: [ {loader: "css-loader", options:{}}, {loader: ""} ] ` ** // 一般会带有配置项**
> - `use: {loader: "",options: {}}` ** // 单个 loader**

```js
// webpack.config.js

module.exports = {
  // ...
  module: {
    rules: [
      {
        /**`
         * test: 匹配要转换的文件类型
         * use: 对命中的模块使用具体的loader以及配置loader
         */
        test: /\.css$/i,
        use: [""],
      },
      {
        test: 正则表达式,
        use: [
          "",
          {
            loader: "",
            options: {},
          },
        ],
      },
    ],
  },
};
```

# 自定义 loader

`loader`本质就是一个导出为函数的`JS`模块。

一个`loader`只会接受一个参数：`content`：资源文件的内容（字符串）。

**`content`就是我们`test`匹配到的资源文件的内容**

```js
module.exports = function (content) {
  console.log(content);
  // 返回值就是最终被打包的内容、将这一个loader产生的结果或者资源文件作为下一个loader的content;
  return content;
};
```

## 同步 loader 和异步 loader

### 同步 loader

一般的 loader 转换都是同步的，直接 return 返回我们的处理结果：

```js
module.exports = function (content) {
  // 对 content 进行一些处理
  const res = dosth(content);
  return res;
};
```

也可以直接使用 `this.callback()` 这个 api，然后在最后直接 **return undefined** 的方式告诉 webpack 去 this.callback() 寻找他要的结果，这个 api 接受这些参数：

```js
this.callback(
  err: Error | null, // 一个无法正常编译时的 Error 或者 直接给个 null
  content: string | Buffer,// 我们处理后返回的内容 可以是 string 或者 Buffer（）
  sourceMap?: SourceMap, // 可选 可以是一个被正常解析的 source map
  meta?: any // 可选 可以是任何东西，比如一个公用的 AST 语法树
);
```

> 从 webpack 5 开始，this.getOptions 可以获取到 loader 上下文对象。它用来替代来自 loader-utils 中的 getOptions 方法。

```js
module.exports = function (content) {
  // 获取到用户传给当前 loader 的参数
  const options = this.getOptions();
  const res = someSyncOperation(content, options);
  this.callback(null, res, sourceMaps);
  // 注意这里由于使用了 this.callback 直接 return 就行
  return;
};
```

### 异步 loader

通常转换流程都是同步的，但是当我们遇到譬如需要网络请求等场景，那么为了避免阻塞构建步骤，我们会采取异步构建的方式，对于异步 loader 我们主要需要使用 this.async() 来告知 webpack 这次构建操作是异步的：

```js
module.exports = function (content) {
  var callback = this.async();
  someAsyncOperation(content, function (err, result) {
    if (err) return callback(err);
    callback(null, result, sourceMaps, meta);
  });
};
```

## 手写 loader

### babel-loader

```js
// index.js
let add = (a, b) => a + b;
console.log("add", add(3, 5));
```

不增加任何配置的情况下,`npx webpack`后：

```js
/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  let add = (a, b) => a + b;
  console.log("add", add(3, 5));

  /******/
})();
```

这里使用了两个`es6`的语法：`let`以及箭头函数，我们想要`6 to 5`：

```js
// babel-loader.js
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: "./loaders/babel-loader.js",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
};
```

转换后的代码：

```js
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {};

  var add = function add(a, b) {
    return a + b;
  };

  console.log("add", add(3, 5));
  /******/
})();
```

### markdown-loader

加载 markdown 文件的加载器，以便可以在代码中直接导入 md 文件。我们都应该知道 markdown 一般是需要转换为 html 之后再呈现到页面上的，所以我希望导入 md 文件后，直接得到 markdown 转换后的 html 字符串。

```js
// webpack.config.js

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: {
          loader: ["./markdown-loader.js"],
        },
      },
    ],
  },
};
```

**loader 逻辑**

```js
// markdown-loader.js
const marked = require("marked");

module.exports = function (content) {
  // 1. 将 markdown 转换为 html 字符串
  const html = marked(content);
  // html => '<h1>About</h1><p>this is a markdown file.</p>'
  // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
  const code = `module.exports = ${JSON.stringify(html)}`;
  return code;
  // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'
};
```
