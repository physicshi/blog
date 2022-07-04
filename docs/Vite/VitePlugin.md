---
sidebar_position: 4
---

Vite 插件与 Rollup 插件结构类似，为一个 name 和各种插件 Hook 的对象：

```js
{
  // 插件名称
  name: 'vite-plugin-xxx',
  load(code) {
    // 钩子逻辑
  },
}
```

一般情况下因为要考虑到外部传参，我们不会直接写一个对象，而是实现一个返回插件对象的工厂函数，如下代码所示:

```js
// myPlugin.js
export function myVitePlugin(options) {
  console.log(options);
  return {
    name: "vite-plugin-xxx",
    load(id) {
      // 在钩子逻辑中可以通过闭包访问外部的 options 传参
    },
  };
}

// 使用方式
// vite.config.ts
import { myVitePlugin } from "./myVitePlugin";
export default {
  plugins: [
    myVitePlugin({
      /* 给插件传参 */
    }),
  ],
};
```

## Hooks

### 通用 Hooks

Vite 开发阶段会调用一系列与 Rollup 兼容的钩子，这些钩子主要分为三个阶段：

1. 服务器启动阶段: options 和 buildStart 钩子会在服务启动时被调用
2. 请求响应阶段: 当浏览器发起请求时，Vite 内部依次调用 resolveId、load 和 transform 钩子
3. 服务器关闭阶段: Vite 会依次执行 buildEnd 和 closeBundle 钩子

除了以上钩子，其他 Rollup 插件钩子(如 moduleParsed、renderChunk)均不会在 Vite 开发阶段调用。而生产环境下，由于 Vite 直接使用 Rollup，Vite 插件中所有 Rollup 的插件钩子都会生效

### 独有 Hooks

- config：用来进一步修改配置
- configResolved：用来记录最终的配置信息
- configureServer：用来获取 Vite Dev Server 实例，添加中间件
- transformIndexHtml：用来转换 HTML 的内容
- handleHotUpdate：用来进行热更新模块的过滤，或者进行自定义的热更新处理

```js
// config 钩子中返回一个配置对象，这个配置对象会和 Vite 已有的配置进行深度的合并
// 也可以通过钩子的入参拿到 config 对象进行自定义的修改
const mutateConfigPlugin = () => ({
  name: "mutate-config",
  // command 为 `serve`(开发环境) 或者 `build`(生产环境)
  config(config, { command }) {
    // 生产环境中修改 root 参数
    if (command === "build") {
      config.root = __dirname;
    }
  },
});

// configResolved 钩子中返回最终的配置对象
const exmaplePlugin = () => {
  let config;

  return {
    name: "read-config",

    configResolved(resolvedConfig) {
      // 记录最终配置
      config = resolvedConfig;
    },

    // 在其他钩子中可以访问到配置
    transform(code, id) {
      console.log(config);
    },
  };
};

// configureServer 钩子用来获取 Vite Dev Server 实例，添加中间件
const myPlugin = () => ({
  name: "configure-server",
  configureServer(server) {
    // 姿势 1: 在 Vite 内置中间件之前执行
    server.middlewares.use((req, res, next) => {
      // 自定义请求处理逻辑
    });
    // 姿势 2: 在 Vite 内置中间件之后执行
    return () => {
      server.middlewares.use((req, res, next) => {
        // 自定义请求处理逻辑
      });
    };
  },
});
```

Vite 插件执行顺序：

![image](https://tva4.sinaimg.cn/large/006T9etDly1h1wek70ju6j30yq0d4472.jpg)

- 服务启动阶段: config、configResolved、options、configureServer、buildStart
- 请求响应阶段: 如果是 html 文件，仅执行 transformIndexHtml 钩子；对于非 HTML 文件，则依次执行 resolveId、load 和 transform 钩子
- 热更新阶段: 执行 handleHotUpdate 钩子
- 服务关闭阶段: 依次执行 buildEnd 和 closeBundle 钩子

### 插件实战

> 开发一个 Vite 插件本质上就是返回一个对象，要有 name 属性，用来标识插件，加上各种 hook 函数

#### 实战案例 1: 虚拟模块加载

首先我们来实现一个虚拟模块（在内存中的）的加载插件

作为构建工具，一般需要处理两种形式的模块，一种存在于真实的磁盘文件系统中，另一种并不在磁盘而在内存当中，也就是虚拟模块。通过虚拟模块，我们既可以把自己手写的一些代码字符串作为单独的模块内容，又可以将内存中某些经过计算得出的变量作为模块内容进行加载，非常灵活和方便。接下来让我们通过一些具体的例子来实操一下，首先通过脚手架命令初始化一个 react + ts 项目：

```shell
npm init vite
```

然后通过 pnpm i 安装依赖，接着新建 plugins 目录，开始插件的开发:

```ts
// plugins/virtual-module.ts
import { Plugin } from "vite";

// 虚拟模块名称
const virtualFibModuleId = "virtual:fib";
// Vite 中约定对于虚拟模块，解析后的路径需要加上`\0`前缀
const resolvedFibVirtualModuleId = "\0" + virtualFibModuleId;

export default function virtualFibModulePlugin(): Plugin {
  let config: ResolvedConfig | null = null;
  return {
    name: "vite-plugin-virtual-module",
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolvedFibVirtualModuleId;
      }
    },
    load(id) {
      // 加载虚拟模块
      if (id === resolvedFibVirtualModuleId) {
        return "export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }";
      }
    },
  };
}
```

接着我们在项目中来使用这个插件:

```ts
// vite.config.ts
import virtual from "./plugins/virtual-module.ts";

// 配置插件
{
  plugins: [react(), virtual()];
}
```

然后在 main.tsx 中加入如下的代码:

```js
import fib from "virtual:fib";

alert(`结果: ${fib(10)}`);
```

这里我们使用了 virtual:fib 这个虚拟模块，虽然这个模块不存在真实的文件系统中，但你打开浏览器后可以发现这个模块导出的函数是可以正常执行的
