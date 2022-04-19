---
sidebar_position: 1
---

<!-- :::tip
该笔记以 webpack4 为基础
::: -->

webpack is a static module bundler for modern JavaScript applications.

`Webpack`是一个静态的模块化打包工具。

- 打包 bundler： webpack 可以将帮助我们进行打包，所以它是一个**打包工具**；
- 静态的 static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；
- 模块化 module： **webpack 默认支持各种模块化开发**，ES Module、CommonJS、AMD 等；
- 现代的 modern：正是因为现代前端开发面临各种各样的问题，才催生了 webpack 的出现和发展；

> `webpack` 是通过模块之间依赖关系的分析来构建依赖图，通过不同的后缀对应的 `loader` 来对不同内容做转换，所以支持 `css`、`js`、`png` 等各种模块。

![](./img/webcli.png)

**`webpack`在执行时是依赖`webpack-cli`的，如果没有安装`webpack-cli`第三步就走不通就会报错；`webpack-cli`中代码执行，才是真正利用`webpack`进行编译和打包的过程;**

如果没有 webpack-cli 那么就不能在命令行里运行 webapck 或者 npx webpack 指令

```shell
npm i webpack webpack-cli --save-dev
```

> webpack 是 Webpack 的核心模块，webpack-cli 是 Webpack 的 CLI 程序，用来在命令行中调用 Webpack。

安装完成之后，webpack-cli 所提供的 CLI 程序就会出现在 node_modules/.bin 目录当中，我们可以通过 npx 快速找到 CLI 并运行它，具体操作如下：

```shell
npx webpack
```

npx 是 npm 5.2 以后新增的一个命令，可以用来更方便的执行远程模块或者项目 `node_modules` 中的 CLI 程序。

这个命令在执行的过程中，Webpack 会自动从 `./src/index.js` 文件开始打包，然后根据代码中的模块导入操作，自动将所有用到的模块代码打包到一起。

与之对应的就是项目的根目录下多出了一个 dist 目录，我们的打包结果就存放在这个目录下的 main.js 文件中。

## 基本配置

执行 `npx webapck` 本质上就是来执行配置文件 `webpack.config.js`，没有配置文件就是执行默认配置。

```js
module.exports = {
  entry: "", // 打包入口
  output: {
    // 打包输出 bundles
    filename: "", // 输出文件名
    path: "", // 输出路径
  },
  mode: "", // 环境配置
  module: {
    rules: [
      // loader 配置，用于转换某些类型的模块
      {
        test: "", // 识别出哪些文件会被转换
        include: path.resolve(__dirname, ""), // 实际需要转换的模块
        use: "", // 定义出在进行转换时，应该使用哪个 loader
        // 对同一个模块使用多个 loader，注意顺序，从后往前
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      },
    ],
  },
  plugins: [
    // 插件配置
    // new xxxPlugin(),
    /**
     * new HtmlWebpackPlugin({
     * title: 'Webpack Plugin Sample',
     * meta: {
     *   viewport: 'width=device-width'
     * }
     * })
     */
  ],
};
```

mode 配置选项，可以告知 webpack 使用响应模式的内置优化：

- 默认值是生产模式 production；
- 可选值有：'none' | 'development' | 'production'；

其中 none 是不使用任何默认优化选项。
:::caution
Webpack 的 `Tree-shaking` 和 `sideEffects` 特性在生产模式下会自动开启。
:::

## 📦 打包流程

整体生成的代码其实就是一个立即执行函数，这个函数是 Webpack 工作入口（webpackBootstrap）。

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化
   启动构建；
   读取、合并配置参数；
   加载 Plugin；
   实例化 Compiler；
2. 编译
   从 entry 出发，根据每个 module 调用对应的 loader；
   用对应的 loader 翻译文件；
   再找到该 module 依赖的 module；
   递归的进行编译处理；
   对编译后的 module 组合成 chunk 以及对应资源的 assets；
3. 输出
   把编译过程得到的 assets 输出到文件系统；

### module

module 即每一个资源文件的模块对应，如 js / css / 图片等，由 NormalModule 实例化而来，存在 compilations.modules 中；它可以理解为是源文件到 chunk 的一个中间态，便于编译过程中进行各种操作。

### chunk

chunk 即每一个输出文件的对应，包括入口文件，异步加载文件，优化切割后的文件等等；它可以包含多个 module；存于 compilation.chunks；chunkGroup 可以包含多个 chunk（入口 chunk 或异步模块的 chunk）。entrypoint 就是一个 chunkGroup，里包含入口 chunk。存于 compilation.chunkGroups。

### Compiler

Compiler 对象包含了当前运行 Webpack 的配置，包括 entry、output、loaders 等配置，这个对象在启动 Webpack 时被实例化，而且是全局唯一的。Plugin 可以通过该对象获取到 Webpack 的配置信息进行处理、以及监听 compiler 的 hooks 从而做进一步的处理。如下：

```js
class Compiler extends Tapable {
  constructor(context) {
    // ...
    (this.options = {}),
      (this.hooks = {
        run: new AsyncSeriesHook(["compiler"]),
        compile: new SyncHook(["params"]),
        make: new AsyncParallelHook(["compilation"]),
        // ...
      });
  }
}
```

### Compilation

Compilation 对象代表了一次资源版本构建。每次构建过程都会产生一次 Compilation，比如我们启动 watch 功能的时候，每当检测到一个文件变化，就会重新创建一个新的 Compilation，从而生成一组新的编译资源 一个 Compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。Compilation 模块会被 Compiler 用来创建新的编译（或新的构建）。compilation 实例能够访问所有的模块和它们的依赖（大部分是循环依赖）。它会对应用程序的依赖图中所有模块进行字面上的编译(literal compilation)。在编译阶段，模块会被加载(loaded)、封存(sealed)、优化(optimized)、分块(chunked)、哈希(hashed)和重新创建(restored)。Compilation 对象也提供了插件需要自定义功能的回调，以供插件做自定义处理时选择使用拓展。简单来说，Compilation 的职责就是构建模块和 Chunk，并利用插件优化构建过程。

总结来说，以上概念的关系可以通过下面的流程图来更好地 get 到：每个文件可以被创建为一个 module，若干个 module 可以解析编译组成一个 chunk，入口+异步 chunk 可以组成一个 chunkGroup。

![webpack_concept](https://tva1.sinaimg.cn/large/006T9etDly1gzj454mkxfj30kk0uqwi0.jpg)

### Webpack 的构建流程总结

- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
- 确定入口：根据配置中的 entry 找出所有的入口文件；
- 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
- 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
- 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
