---
sidebar_position: 10
---

强缓存的优势很明显，无需向服务器发送请求，节省了大量的时间和带宽。但是有一个问题，缓存有效期内想更新资源怎么办，问题的关键在于如何使强缓存失效。通常的解决方法是更新文件名，文件名不一样的话，浏览器就会重新请求资源。我们可以使用 webpack 的 hash 配置。

- hash 是和整个 webpack 构建项目相关的，每次项目构建 hash 对应的值都是不同的（即使文件没改动），注意所有文件的 hash 都相同；
- chunkhash 根据不同的入口文件构建对应的 chunk，生成对应的哈希值；
- contenthash 表示由文件内容产生的 hash 值，内容不同产生的 contenthash 值也不一样，主要用于 CSS 抽离 CSS 文件，效果就是改 js 时，不会修改依赖的 css 文件的 hash 值。

```json
{
  "devDependencies": {
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2"
  }
}
```

demo 的目录结构：

![image](https://tva1.sinaimg.cn/large/006T9etDly1h0e3ordgpjj30h20dcgnn.jpg)

各文件代码：

chunk0.js

```js
export default function add(a, b) {
  return a + b;
}
```

chunk1.js

```js
export default function showName() {
  return "my name is Js";
}
```

common.js

```js
export default function commonJs() {
  return "commonJs";
}
```

index.js

```js
import add from "./chunk0.js";
import commonJs from "./common";

console.log(add(1, 1));
console.log(commonJs());
```

style.css

```css
body {
  background: #000;
}
```

webpack.config.js

```js
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js", // 第一个入口文件
    chunk1: "./src/chunk1.js", // 第二个入口文件
  },
  output: {
    filename: "[name].[hash].js", // 出口文件
  },
};
```

## hash

直接 `npx webpack`

![image](https://tvax3.sinaimg.cn/large/006T9etDly1h0e4862c94j31k20a249b.jpg)

发现所有文件的 hash 都相同。

此时如果我们修改 chunk1.js 中的代码：

```js
export default function showName() {
  return "my name is Javascript"; // Js => Javascript
}
```

再次 npx webpack ，发现所有的 hash 都发生了变化，如下图所示：

<figcaption>修改前</figcaption>

![image](https://tvax3.sinaimg.cn/large/006T9etDly1h0e4862c94j31k20a249b.jpg)

<figcaption>修改后</figcaption>

![image](https://tva1.sinaimg.cn/large/006T9etDly1h0e4k9k4zej31km0a049j.jpg)

此时如果想修改 chunk1.js，而 index.js 不改变，则需要用到 chunkhash

## chunkhash

将配置中的 hash 改为 chunkhash：

```js
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    chunk1: "./src/chunk1.js",
  },
  output: {
    filename: "[name].[chunkhash].js", // hash => chunkhash
  },
};
```

![image](https://tvax3.sinaimg.cn/large/006T9etDly1h0e5ossq8qj315s07u15f.jpg)

可以发现这两个文件的 hash 不一致，这时候再次修改 chunk1.js

```js
export default function showName() {
  return "my name is Python"; // Javascript => Python
}
```

![image](https://tvax1.sinaimg.cn/large/006T9etDly1h0e5sgjgkoj313607uwl6.jpg)

可以发现 chunk1.js 的哈希值发生了变化，而 index.js 的哈希值并没有变化（做了缓存）。

## contenthash

```shell
npm i css-loader mini-css-extract-plugin -D
```

```js
// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js", // 第一个入口文件
    chunk1: "./src/chunk1.js", // 第二个入口文件
  },
  output: {
    filename: "[name].[chunkhash].js", // 出口文件
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    // 提取css插件
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
  ],
};
```

index.js

```js
import add from "./chunk0.js";
import commonJs from "./common";
import "./style.css"; // 新增

console.log(add(1, 1));
console.log(commonJs());
```

![image](https://tva2.sinaimg.cn/large/006T9etDly1h0e691zvocj318m0b215n.jpg)

可以看到 index.css 和 index.js 的哈希值是一样的。

修改 common.js：

```js
export default function commonJs() {
  return "amd cmd commonJs";
}
```

修改前：

![image](https://tva2.sinaimg.cn/large/006T9etDly1h0e691zvocj318m0b215n.jpg)

修改后：

![image](https://tvax4.sinaimg.cn/large/006T9etDly1h0e6q6kw17j31700b81ca.jpg)

可以看到，只修改 JS，我们的 CSS 文件的 hash 也发生了更新，这个时候就需要使用 contenthash 来发挥作用了。

> 当然，改 css 文件，这时候 index.css 和 index.js 两个文件的哈希值都会变，因为 style.css 文件是 index.js 的一个依赖文件。

修改 webpack 配置：

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    chunk1: "./src/chunk1.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // chunkhash => contenthash
    }),
  ],
};
```

![image](https://tva2.sinaimg.cn/large/006T9etDly1h0e6zlt5qoj317e09cdvw.jpg)

三个文件的哈希值都不相同

这时候修改 common.js：

```js
export default function commonJs() {
  return "ESModule";
}
```

运行 webpack：

![image](https://tvax3.sinaimg.cn/large/006T9etDly1h0e70f8xdvj316y098wok.jpg)

修改 JS 时我们的 CSS 文件的 hash 并没有更新（做了缓存），index.js 的 hash 发生了变化。

这时候再次修改 style.css 文件：

```css
body {
  /* #000 -> #111 */
  background: #111;
}
```

![image](https://tva1.sinaimg.cn/large/006T9etDly1h0e724xy6mj319m09agvr.jpg)

这时候 index.css 和 index.js 两个文件的哈希值都会变，因为 style.css 文件是 index.js 的一个依赖文件。

## 更多的参考

- [大公司里怎样开发和部署前端代码？](https://github.com/fouber/blog/issues/6)
