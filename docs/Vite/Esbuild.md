---
sidebar_position: 2
---

再次回顾下 Vite 的 no-bundle 的含义：利用浏览器原生对 ES 模块的支持，实现开发阶段的 Dev Server，进行模块的按需加载，而不是先整体打包后再进行加载。

不过这里说的 no-bundle，是对于源码（业务代码）。对于第三方依赖而言，Vite 还是选择打包（bundle），而且是使用 Esbuild 打包。

对于第三方依赖，需要在应用启动前进行**打包**并且**转换为 ESM 格式**

但是 Esbuild 作为打包工具也有一些缺点：

- 不支持降级到 ES5 的代码。这意味着在低端浏览器代码会跑不起来
- 不支持 const enum 等语法。这意味着单独使用这些语法在 esbuild 中会直接抛错
- 不提供操作打包产物的接口，像 Rollup 中灵活处理打包产物的能力(如 renderChunk 钩子)在 Esbuild 当中完全没有
- 不支持自定义 Code Splitting 策略。传统的 Webpack 和 Rollup 都提供了自定义拆包策略的 API，而 Esbuild 并未提供，从而降级了拆包优化的灵活性

所以 Vite 在开发阶段使用 Esbuild，生产环境用 Rollup 作为依赖打包工具。

> rollup 生态更成熟，功能更丰富

Esbuild 除了在开发阶段作为实现依赖预构建的打包工具，另外还会作为 TS 和 JSX 编译工具以及代码压缩工具。

在 TS(X)/JS(X) 单文件编译上面，Vite 使用 Esbuild 进行语法转译，也就是将 Esbuild 作为 Transformer 来用。Esbuild 转译 TS 或者 JSX 的能力通过 Vite 插件提供，这个 Vite 插件在开发环境和生产环境都会执行，用来替换原先 Babel 或者 TSC 的功能。

主要是出于性能考量，毕竟 babel 或者 tsc 都太慢了，当然 Esbuild Transfomer 虽然性能提升很大，但是也有一些局限，就是 TS 中的类型检查问题：Esbuild 并没有实现 TS 的类型系统，在编译 TS(或者 TSX) 文件时仅仅抹掉了类型相关的代码，暂时没有能力实现类型检查。

所以我们会在 vite build 之前会先执行 tsc 命令，也就是借助 TS 官方的编译器进行类型检查。

在代码压缩方面，Vite 从 2.6 版本开始，就官宣默认使用 Esbuild 来进行生产环境的代码压缩，包括 JS 代码和 CSS 代码。

在生产环境中 Esbuild 压缩器通过插件的形式融入到了 Rollup 的打包流程，原因也是 Esbuild 压缩效率很高。

传统的方式都是使用 Terser 这种 JS 开发的压缩器来实现，在 Webpack 或者 Rollup 中作为一个 Plugin 来完成代码打包后的压缩混淆的工作。

但 Terser 其实很慢，主要有 2 个原因。

- 压缩这项工作涉及大量 AST 操作，并且在传统的构建流程中，AST 在各个工具之间无法共享，比如 Terser 就无法与 Babel 共享同一个 AST，造成了很多重复解析的过程
- JS 本身属于解释性 + JIT（即时编译） 的语言，对于压缩这种 CPU 密集型的工作，其性能远远比不上 Golang 这种原生语言

因此，Esbuild 这种从头到尾共享 AST 以及原生语言编写的 Minifier 在性能上能够甩开传统工具的好几十倍

## Esbuild 的基本使用

安装：

```shell
pnpm install esbuild
```

接下来可以在`package.json`中添加 build 脚本：

```json
{
  "scripts": {
    "build": "./node_modules/.bin/esbuild src/index.jsx --bundle --outfile=dist/out.js"
  }
}
```

然后 `pnpm run build`，就是通过命令行完成了 Esbuild 打包，但命令行的使用方式不够灵活，只能传入一些简单的命令行参数，稍微复杂的场景就不适用了，所以一般情况下我们还是会用代码调用的方式。

Esbuild 对外暴露两类 API：Build API 和 Transform API，前者用于打包，后者用于单文件编译。

### Build API

Build API 主要用来进行项目打包，包括 build、buildSync 和 serve 三个方法。

以 build 方法为例：

```js
const { build, buildSync, serve } = require("esbuild");

async function runBuild() {
  // 异步方法，返回一个 Promise
  const result = await build({
    // ----  如下是一些常见的配置  ---
    // 当前项目根目录 process.cwd()方法返回 Node.js 进程的当前工作目录
    absWorkingDir: process.cwd(),
    // 入口文件列表，为一个数组
    entryPoints: ["./src/index.jsx"],
    // 打包产物目录
    outdir: "dist",
    // 是否需要打包，一般设为 true
    bundle: true,
    // 模块格式，包括`esm`、`commonjs`和`iife`
    format: "esm",
    // 需要排除打包的依赖列表
    external: [],
    // 是否开启自动拆包
    splitting: true,
    // 是否生成 SourceMap 文件
    sourcemap: true,
    // 是否生成打包的元信息文件
    metafile: true,
    // 是否进行代码压缩
    minify: false,
    // 是否开启 watch 模式，在 watch 模式下代码变动则会触发重新打包
    watch: false,
    // 是否将产物写入磁盘
    write: true,
    // Esbuild 内置了一系列的 loader，包括 base64、binary、css、dataurl、file、js(x)、ts(x)、text、json
    // 针对一些特殊的文件，调用不同的 loader 进行加载
    loader: {
      ".png": "base64",
    },
  });
  console.log(result);
}

runBuild();
```

`node build.js` 后，可以看到 dist 目录里打包产物和相应的 SourceMap 文件已成功写入硬盘。

对于 buildSync 方法：

```js
function runBuild() {
  // 同步方法
  const result = buildSync({
    // 省略一系列的配置
  });
  console.log(result);
}

runBuild();
```

另外一个比较强大的 API——serve。这个 API 有 3 个特点：

- 开启 serve 模式后，将在指定的端口和目录上搭建一个静态文件服务，这个服务器用原生 Go 语言实现，性能比 Nodejs 更高
- 类似 webpack-dev-server，所有的产物文件都默认不会写到磁盘，而是放在内存中，通过请求服务来访问
- 每次请求到来时，都会进行重新构建(rebuild)，永远返回新的产物

> 值得注意的是，触发 rebuild 的条件并不是代码改动，而是新的请求到来

```js
// build.js
const { build, buildSync, serve } = require("esbuild");

function runBuild() {
  serve(
    {
      port: 8000,
      // 静态资源目录
      servedir: "./dist",
    },
    {
      absWorkingDir: process.cwd(),
      entryPoints: ["./src/index.jsx"],
      bundle: true,
      format: "esm",
      splitting: true,
      sourcemap: true,
      ignoreAnnotations: true,
      metafile: true,
    }
  ).then((server) => {
    console.log("HTTP Server starts at port", server.port);
  });
}

runBuild();
```

我们在浏览器访问 `localhost:8000` 可以看到 Esbuild 服务器返回的编译产物。

后续每次在浏览器请求都会触发 Esbuild 重新构建，而每次重新构建都是一个增量构建的过程，耗时也会比首次构建少很多(一般能减少 70% 左右)。

> Serve API 只适合在开发阶段使用，不适用于生产环境。

### Transform API

Esbuild 提供的 Transform API 主要用于单文件编译，主要有两个方法 transformSync（同步） 和 transform（异步）。

首先，在项目根目录新建 transform.js，内容如下:

```js
// transform.js
const { transform, transformSync } = require("esbuild");

async function runTransform() {
  // 第一个参数是代码字符串，第二个参数为编译配置
  const content = await transform(
    "const isNull = (str: string): boolean => str.length > 0;",
    {
      sourcemap: true,
      loader: "tsx",
    }
  );
  console.log(content);
}

runTransform();
```

> Vite 的底层实现也是采用 transform 这个异步的 API 进行 TS 及 JSX 的单文件转译的

transformSync 的用法类似，换成同步的调用方式即可

```js
const { transform, transformSync } = require("esbuild");

function runTransform() {
  const content = transformSync("/_ 参数和 transform 相同 _/");
  console.log(content);
}
```

## Esbuild 插件开发

插件就是对于原有能力的扩展，以及执行一系列的自定义逻辑。

Esbuild 插件结构被设计为一个对象，里面有 name 和 setup 两个属性，name 是插件的名称，setup 是一个函数，其中入参是一个 build 对象，这个对象上挂载了一些钩子可供我们自定义一些钩子函数逻辑。

```js
// build.js
let envPlugin = {
  name: "env",
  setup(build) {
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: "env-ns",
    }));

    build.onLoad({ filter: /.*/, namespace: "env-ns" }, () => ({
      contents: JSON.stringify(process.env),
      loader: "json",
    }));
  },
};

require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "out.js",
    // 应用插件
    plugins: [envPlugin],
  })
  .catch(() => process.exit(1));

// index.js
// 应用了 env 插件后，构建时将会被替换成 process.env 对象
import { PATH } from "env";

console.log(`PATH is ${PATH}`);
```

### 钩子函数

1. onResolve 控制路径解析
2. onLoad 控制模块内容加载的过程
3. onStart 在构建开启时执行一些自定义的逻辑
4. onEnd 在构建结束时执行一些自定义的逻辑

对于 onResolve 和 onLoad，首先这两个钩子都需要传入两个参数: Options 和 Callback。

Options 是一个对象，对于 onResolve 和 onload 都一样，包含 filter 和 namespace 两个属性，类型定义如下:

```ts
interface Options {
  filter: RegExp;
  namespace?: string;
}
```

- filter 为必传参数，是一个正则表达式，它决定了要过滤出的特征文件
- namespace 为选填参数，一般在 onResolve 钩子中的回调参数返回 namespace 属性作为标识，我们可以在 onLoad 钩子中通过 namespace 将模块过滤出来。如上述插件示例就在 onLoad 钩子通过 env-ns 这个 namespace 标识过滤出了要处理的 env 模块

除了 Options 参数，还有一个回调参数 Callback，它的类型根据不同的钩子会有所不同。相比于 Options，Callback 函数入参和返回值的结构复杂得多，涉及很多属性。

对于 onStart 和 onEnd 两个钩子:

```js
let examplePlugin = {
  name: "example",
  setup(build) {
    build.onStart(() => {
      console.log("build started");
    });
    build.onEnd((buildResult) => {
      if (buildResult.errors.length) {
        return;
      }
      // 构建元信息
      // 获取元信息后做一些自定义的事情，比如生成 HTML
      console.log(buildResult.metafile);
    });
  },
};
```

不过在使用这两个钩子的时候，有 2 点需要注意:

- onStart 的执行时机是在每次 build 的时候，包括触发 watch 或者 serve 模式下的重新构建
- onEnd 钩子中如果要拿到 metafile，必须将 Esbuild 的构建配置中 metafile 属性设为 true

### 插件实战
