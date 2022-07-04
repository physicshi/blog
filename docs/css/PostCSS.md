---
sidebar_position: 2
---

> PostCSS 是用来处理 css 的，往往被叫做 css 后处理器，比如处理 less/sass 编译后的 css

![image](https://tva2.sinaimg.cn/mw690/006T9etDly1h1tyymht7yj31au0e075f.jpg)

PostCSS 是一个通过使用 JS 插件来转换样式的工具，比如可以进行 CSS 的转换和适配：自动添加浏览器前缀、css 样式重置。

- autoprefixer，为不同的目标浏览器添加样式前缀，解决的是浏览器兼容性的问题
- postcss-pxtorem，用来将 px 转换为 rem 单位，在适配移动端的场景下很常用
- postcss-preset-env，通过它你可以编写最新的 CSS 语法，不用担心兼容性问题

关于 PostCSS 插件，有一个站点：www.postcss.parts

## 使用

如何使用：

- 找到 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader
- 选择可以添加你需要的 PostCSS 相关的插件

### 直接使用

当然也可以直接在终端使用：

- 需要安装 postcss-cli

```shell
pnpm install postcss postcss-cli -D
```

```css
/* test.css */
:fullscreen {
}

.content {
  user-select: none;
  transition: all 0.5s ease;
}
```

安装 `autoprefixer`，`pnpm install autoprefixer -D` 后：

```shell
pnpm postcss --use autoprefixer -o result.css test.css
```

```css
/* result.css */
:-webkit-full-screen {
}

:-ms-fullscreen {
}

:fullscreen {
}

.content {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.5s ease;
}
```

### 在 webpack 中

> 可以配合 `.browserslistrc`

```shell
pnmp install postcss-loader -D
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
        ],
      },
    ],
  },
};
```

不过我们可能更常用 `postcss-preset-env`：

- 同样作为一个 psotcss 插件，可以将一些现代的 css 特性，转成大多数浏览器认识的 css，并且会根据目标浏览器或者运行时环境添加所需的 polyfill
- 当然这个会自动帮我们添加 autoprefixer，相当于内置了 autoprefixer

```shell
pnpm install postcss-preset-env -D
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // 或者直接写 "postcss-preset-env" 是等价的
                  // 不过有些插件不支持直接写字符串，因为可能需要调用传参数，具体看插件官方文档
                  require("postcss-preset-env"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
```

对于 `less` 文件来说，我们的配置可以抽离出来，在项目根目录下创建 `postcss.config.js`：

```js
// postcss.config.js
module.exports = {
  plugins: [require("postcss-preset-env")],
};
```

相应的 `webpack.config.js` 中：

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
};
```

#### importLoaders

有一个场景，比如我们在 `test.css` 中：

```css
/* test.css */
.content {
  color: #123456;
}

:fullscreen {
}

.content {
  user-select: none;
  transition: all 0.5s ease;
}
```

然后在 `index.css` 中引入：

```css
/* index.css */
@import "./test.css";
```

在另外的 js 文件中导入：

```js
// index.js
import "../css/index.css";
```

这里重新打包是不生效的：没转换、没加前缀。

原因在于：当处理 `index.js` 时，发现引用了 `index.css`，这里就会 `posscss-loader -> css-loader`，发现 `index.css` 引用了 `test.css` 中的内容，`css-loader` 进一步处理 `test.css`中的内容，但是不会返过来再用 `postcss-loader`处理 `test.css` 的内容，所以 `postcss-preset-env` 没有生效。

我们希望真实开发时，所有的 css 文件都可以被 postcss-loader 处理：

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 这里的含义就是返回去再用上一个 loader 处理
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 再用上两个 loader("postcss-loader"、"less-loader") 处理
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
};
```

### 在 Vite 中

一般可以通过 `postcss.config.js` 来配置 `postcss`，不过在 Vite 配置文件中已经提供了 PostCSS 的配置入口，可以直接在 Vite 配置文件中进行操作：

```js
// vite.config.ts
import autoprefixer from "autoprefixer";

export default {
  css: {
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器 ff -> Mozilla Firefox
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }),
      ],
    },
  },
};
```

:::caution
Vite 配置文件中如果有 PostCSS 配置的情况下会覆盖掉 postcss.config.js 的内容
:::
